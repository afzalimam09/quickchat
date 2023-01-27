import { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
    const [account, setAccount] = useState();
    const [person, setPerson] = useState({});
    const [conversation, setConversation] = useState({});
    const [activeUsers, setActiveUsers] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);

    const socket = useRef();
    useEffect(() => {
        socket.current = io(process.env.REACT_APP_BACKEND_URL);
    }, []);
    return (
        <AccountContext.Provider
            value={{
                account,
                setAccount,
                person,
                setPerson,
                conversation,
                setConversation,
                socket,
                activeUsers,
                setActiveUsers,
                newMessageFlag,
                setNewMessageFlag,
            }}
        >
            {children}
        </AccountContext.Provider>
    );
};

export default AccountProvider;
