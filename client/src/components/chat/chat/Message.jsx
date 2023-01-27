import { Box, styled, Typography } from "@mui/material";
import dateFormat from "dateformat";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Wrapper = styled(Box)`
    background: #ffffff;
    padding: 5px;
    max-width: 60%;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`;

const Own = styled(Box)`
    background: #dcf8c6;
    padding: 5px;
    max-width: 60%;
    width: fit-content;
    margin-left: auto;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`;

const Text = styled(Typography)`
    font-size: 14px;
    padding: 0 13px 0 5px;
`;

const Time = styled(Typography)`
    font-size: 10px;
    color: #919191;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: auto;
`;
const Message = ({ message }) => {
    const { account } = useContext(AccountContext);
    return (
        <>
            {account.sub === message.senderId ? (
                <Own>
                    <Text>{message.text}</Text>
                    <Time>{dateFormat(message.createdAt, "h:MM TT")}</Time>
                </Own>
            ) : (
                <Wrapper>
                    <Text>{message.text}</Text>
                    <Time>{dateFormat(message.createdAt, "h:MM TT")}</Time>
                </Wrapper>
            )}
        </>
    );
};

export default Message;
