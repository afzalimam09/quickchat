import Message from "../../models/messageModel.js";
import {
    createOne,
    deleteOne,
    getAll,
    getOne,
    updateOne,
} from "../handleFactory.js";

export const addMessage = createOne(Message);
export const getAllMessages = getAll(Message);
export const getMessage = getOne(Message);
export const updateMessage = updateOne(Message);
export const deleteMessage = deleteOne(Message);
