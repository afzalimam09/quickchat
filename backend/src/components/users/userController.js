import catchAsync from "../../helper/catchAsync.js";
import User from "../../models/userModel.js";
import {
    createOne,
    deleteOne,
    getAll,
    getOne,
    updateOne,
} from "../handleFactory.js";

// export const addUser = createOne(User);
export const addUser = catchAsync(async (req, res, next) => {
    // const { senderId, receiverId } = req.body;
    const exist = await User.findOne({ sub: req.body.sub });
    if (exist) {
        return res.status(200).json({
            message: "User exists allready!",
            data: exist,
        });
    }
    const data = await User.create(req.body);
    return res.status(201).json({
        message: "User saved successfully",
        data,
    });
});

export const getAllUsers = getAll(User);
export const getUser = getOne(User);
export const updateUser = updateOne(User);
export const deleteUser = deleteOne(User);
