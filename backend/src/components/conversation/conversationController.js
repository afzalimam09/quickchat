import catchAsync from "../../helper/catchAsync.js";
import Conversation from "../../models/conversationModel.js";
import {
    createOne,
    deleteOne,
    getAll,
    getOne,
    updateOne,
} from "../handleFactory.js";

export const createConversation = catchAsync(async (req, res, next) => {
    const { senderId, receiverId } = req.body;
    const exist = await Conversation.findOne({
        members: { $all: [receiverId, senderId] },
    });
    if (exist) {
        return res.status(200).json({
            message: "Conversation exists allready!",
            data: exist,
        });
    }
    const newConversation = new Conversation({
        members: [senderId, receiverId],
    });
    const data = await newConversation.save();
    return res.status(201).json({
        message: "Conversation saved successfully",
        data,
    });
});

export const getSingleCoversationByFilter = catchAsync(
    async (req, res, next) => {
        const { senderId, receiverId } = req.body;
        const result = await Conversation.findOne({
            members: { $all: [receiverId, senderId] },
        });
        if (!result) {
            return res.status(200).json({
                message: "Conversation Not found!",
            });
        }
        return res.status(200).json({
            message: "Conversation found",
            data: result,
        });
    }
);

export const getAllConversation = getAll(Conversation);
export const getSingleConversation = getOne(Conversation);
export const updateConversation = updateOne(Conversation);
export const deleteConversation = deleteOne(Conversation);
