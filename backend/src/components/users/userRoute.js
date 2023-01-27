import { Router } from "express";
import {
    addUser,
    deleteUser,
    getAllUsers,
    getUser,
    updateUser,
} from "./userController.js";

const router = Router();

router.route("/").get(getAllUsers).post(addUser);

router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default router;
