import { Box, styled } from "@mui/material";
import { useContext, useEffect, useState, useRef } from "react";
import {
    createMessage,
    getAllMessages,
    updateConversation,
} from "../../../apiCalls";
import { AccountContext } from "../../../context/AccountProvider";
import Footer from "./Footer";
import Message from "./Message";

const Wrapper = styled(Box)`
    background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
    background-size: 50%;
`;

const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
    padding: 2px 35px;
`;

const Messages = ({ person }) => {
    const [value, setValue] = useState("");
    const { account, conversation, socket, newMessageFlag, setNewMessageFlag } =
        useContext(AccountContext);
    const [messages, setMessages] = useState([]);
    const [incomingMessage, setIncomingMessage] = useState(null);

    const scrollRef = useRef();

    useEffect(() => {
        socket.current.on("getMessage", (data) => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now(),
            });
        });
    }, []);

    useEffect(() => {
        const getMessageDetails = async () => {
            const res = await getAllMessages(conversation._id);
            setMessages(res.data);
        };
        conversation._id && getMessageDetails();
    }, [person._id, conversation._id, newMessageFlag]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: "smooth" });
    }, [messages]);

    useEffect(() => {
        incomingMessage &&
            conversation?.members?.includes(incomingMessage.senderId) &&
            setMessages((prev) => [...prev, incomingMessage]);
    }, [incomingMessage, conversation]);

    const sendText = async (e) => {
        const code = e.keyCode || e.which;
        const type = e.type;
        if (code === 13 || type === "click") {
            let message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: "text",
                text: value,
            };
            socket.current.emit("sendMessage", message);
            await createMessage(message);
            await updateConversation(message.conversationId, {
                message: message.text,
            });
            setValue("");
            setNewMessageFlag((prev) => !prev);
        }
    };
    return (
        <Wrapper>
            <Component>
                {messages &&
                    messages.map((message, index) => (
                        <Container key={index} ref={scrollRef}>
                            <Message message={message} />
                        </Container>
                    ))}
            </Component>
            <Footer sendText={sendText} setValue={setValue} value={value} />
        </Wrapper>
    );
};

export default Messages;
