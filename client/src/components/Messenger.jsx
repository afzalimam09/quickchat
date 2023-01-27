import React, { useContext } from "react";
import LoginDialog from "./account/LoginDialog";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import ChatDialog from "./chat/ChatDialog";
import { AccountContext } from "../context/AccountProvider";

const Component = styled(Box)`
    height: 100vh;
    background: #dcdcdc;
`;
const ChatHeader = styled(AppBar)`
    background-color: #00a884;
    height: 125px;
    box-shadow: none;
`;
const LoginHeader = styled(AppBar)`
    background-color: #00bfa5;
    height: 220px;
    box-shadow: none;
`;

const Messenger = () => {
    const { account } = useContext(AccountContext);

    return (
        <Component>
            {account ? (
                <>
                    <ChatHeader>
                        <Toolbar></Toolbar>
                    </ChatHeader>
                    <ChatDialog />
                </>
            ) : (
                <>
                    <LoginHeader>
                        <Toolbar></Toolbar>
                    </LoginHeader>
                    <LoginDialog />
                </>
            )}
        </Component>
    );
};

export default Messenger;
