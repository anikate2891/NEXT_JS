import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const homeRouter = express.Router();


homeRouter.get("/", authMiddleware, (req, res) => {
    res.status(200).json({ message: "Welcome to the Home Route" });
});

export default homeRouter;