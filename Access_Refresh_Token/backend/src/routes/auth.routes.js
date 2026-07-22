import express from "express";
import { loginController, registerController, getMeController, getAccessTokenController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/login", loginController);
authRouter.post("/register", registerController);

authRouter.get("/me", authMiddleware, getMeController);

authRouter.get("/get-accessToken", authMiddleware, getAccessTokenController);

export default authRouter;