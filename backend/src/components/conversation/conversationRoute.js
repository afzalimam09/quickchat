import { Router } from "express";
import {
    createConversation,
    deleteConversation,
    getAllConversation,
    getSingleConversation,
    getSingleCoversationByFilter,
    updateConversation,
} from "./conversationController.js";

const router = Router();

router.route("/").get(getAllConversation).post(createConversation);
router.route("/single").post(getSingleCoversationByFilter);
router
    .route("/:id")
    .get(getSingleConversation)
    .patch(updateConversation)
    .delete(deleteConversation);

export default router;
