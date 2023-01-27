import { Box, styled, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createConversation, getConversation } from "../../../apiCalls";
import { AccountContext } from "../../../context/AccountProvider";
import dateFormat from "dateformat";

const Component = styled(Box)`
    height: 45px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`;

const Image = styled("img")({
    width: 50,
    height: 50,
    objectFit: "cover",
    borderRadius: "50%",
    padding: "0 14px",
});

const Container = styled(Box)`
    display: flex;
`;

const Timestamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`;

const Text = styled(Typography)`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
`;

const Conversation = ({ user }) => {
    const [message, setMessage] = useState({});
    const { setPerson, account, setConversation, newMessageFlag } =
        useContext(AccountContext);
    useEffect(() => {
        const getConversationMessage = async () => {
            const res = await getConversation({
                senderId: account.sub,
                receiverId: user.sub,
            });
            setMessage({
                text: res?.data?.message,
                timestamp: res?.data?.updatedAt,
            });
        };
        getConversationMessage();
    }, [newMessageFlag]);
    const getUser = async () => {
        setPerson(user);
        const result = await createConversation({
            senderId: account.sub,
            receiverId: user.sub,
        });
        setConversation(result.data);
    };
    return (
        <Component onClick={() => getUser()}>
            <Box>
                <Image src={user.picture} alt="display picture" />
            </Box>
            <Box style={{ width: "100%" }}>
                <Container>
                    <Typography>{user.name}</Typography>
                    {message?.text && (
                        <Timestamp>
                            {dateFormat(message?.timestamp, "h:MM TT")}
                        </Timestamp>
                    )}
                </Container>
                <Box>
                    <Text>{message.text}</Text>
                </Box>
            </Box>
        </Component>
    );
};

export default Conversation;
