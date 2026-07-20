import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export async function authMiddleware(req, res, next) {
    try{
        const accessToken = req.cookies.accessToken;
        if (!accessToken) {
            return res.status(401).json({ message: 'Access token not found' });
        }
        const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: 'Invalid access token' });
        }
        const user = await userModel.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        req.user = user;
        next();
    
    } catch (error) {
        res.status(500).json({ message: 'Internal server error: authMiddleware, error: ' + error.message });
    }
}