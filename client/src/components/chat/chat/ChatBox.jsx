import { Box } from "@mui/material";
import React, { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

const ChatBox = () => {
    const { person } = useContext(AccountContext);
    return (
        <Box style={{ height: "75%" }}>
            <ChatHeader person={person} />
            <Messages person={person} />
        </Box>
    );
};

export default ChatBox;
