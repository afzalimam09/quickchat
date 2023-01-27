import { Router } from "express";
import {
    addMessage,
    deleteMessage,
    getAllMessages,
    getMessage,
    updateMessage,
} from "./messageController.js";

const router = Router();

router.route("/").get(getAllMessages).post(addMessage);

router.route("/:id").get(getMessage).patch(updateMessage).delete(deleteMessage);

export default router;
