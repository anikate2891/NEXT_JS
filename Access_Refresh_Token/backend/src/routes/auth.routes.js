import express from "express";
import { loginController, registerController, getAccessTokenController } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/login", loginController);
authRouter.post("/register", registerController);

authRouter.get("/get-accessToken", getAccessTokenController);

export default authRouter;