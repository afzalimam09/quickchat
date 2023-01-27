import { Router } from "express";

import conversationRoute from "./conversation/conversationRoute.js";
import userRoute from "./users/userRoute.js";
import messageRoute from "./message/messageRoute.js";

const router = Router();

router.use("/user", userRoute);
router.use("/message", messageRoute);
router.use("/conversation", conversationRoute);

export default router;
