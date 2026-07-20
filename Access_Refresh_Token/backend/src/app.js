import express from "express";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import homeRouter from "./routes/home.route.js";
import cors from "cors";

const app = express();
app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent
}));

app.use(express.json());
app.use(cookieParser());

//Auth routes
app.use("/api/auth", authRouter);

app.use("/api/home", homeRouter);

export default app;