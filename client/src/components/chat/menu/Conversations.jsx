import { Box, Divider, styled } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { getUsers } from "../../../apiCalls";
import { AccountContext } from "../../../context/AccountProvider";
import Conversation from "./Conversation";

const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: 0.6;
`;

const Conversations = ({ text }) => {
    const { account, socket, setActiveUsers } = useContext(AccountContext);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await getUsers();
            const filteredData = res.data.filter((user) =>
                user.name.toLowerCase().includes(text.toLowerCase())
            );
            setUsers(filteredData);
        };
        fetchData();
    }, [text]);

    useEffect(() => {
        socket.current.emit("addUser", account);
        socket.current.on("getUsers", (users) => {
            setActiveUsers(users);
        });
    }, [account]);

    return (
        <Component>
            {users.map(
                (user) =>
                    user.sub !== account.sub && (
                        <div key={user.sub}>
                            <Conversation user={user} />
                            <StyledDivider />
                        </div>
                    )
            )}
        </Component>
    );
};

export default Conversations;
