import axios from "axios";

const url = `${process.env.REACT_APP_BACKEND_URL}/api/v1`;

// Users
export const addUser = async (data) => {
    try {
        let res = await axios.post(`${url}/user`, data);
        return res.data;
    } catch (err) {
        console.log("Error while calling addUser API ", err);
    }
};

export const getUsers = async () => {
    try {
        let res = await axios.get(`${url}/user`);
        return res.data;
    } catch (err) {
        console.log("Error while calling getUsers API ", err);
    }
};

// Conversation
export const createConversation = async (data) => {
    try {
        const res = await axios.post(`${url}/conversation`, data);
        return res.data;
    } catch (error) {
        console.log("Error while calling createConversation API ", error);
    }
};

export const getConversation = async (data) => {
    try {
        const response = await axios.post(`${url}/conversation/single`, data);
        return response.data;
    } catch (error) {
        console.log("Error while calling getConversation API ", error);
    }
};

export const updateConversation = async (id, data) => {
    try {
        const res = await axios.patch(`${url}/conversation/${id}`, data);
        return res.data;
    } catch (error) {
        console.log("Error while calling updateConversation API ", error);
    }
};

// Message
export const createMessage = async (data) => {
    try {
        const res = await axios.post(`${url}/message`, data);
        return res.data;
    } catch (error) {
        console.log("Error while calling createMessage API ", error);
    }
};

export const getAllMessages = async (convId) => {
    try {
        const res = await axios.get(
            `${url}/message?conversationId=${convId}&sort=+createdAt`
        );
        return res.data;
    } catch (error) {
        console.log("Error while calling getAllMessages API ", error);
    }
};
