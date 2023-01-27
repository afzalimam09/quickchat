import mongoose from "mongoose";

import db from "../connections/dbConnection.js";

const Schema = mongoose.Schema;

//Creating User Schema
const messageSchema = new Schema(
    {
        conversationId: {
            type: String,
        },
        senderId: {
            type: String,
        },
        receiverId: {
            type: String,
        },
        text: {
            type: String,
        },
        type: {
            type: String,
        },
    },
    { timestamps: true }
);

//Create Model out of Schema

const Message = db.model("Message", messageSchema);

export default Message;
