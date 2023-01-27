import mongoose from "mongoose";

import db from "../connections/dbConnection.js";

const Schema = mongoose.Schema;

//Creating User Schema
const conversationSchema = new Schema(
    {
        members: {
            type: Array,
        },
        message: {
            type: String,
        },
    },
    { timestamps: true }
);

//Create Model out of Schema

const Conversation = db.model("Conversation", conversationSchema);

export default Conversation;
