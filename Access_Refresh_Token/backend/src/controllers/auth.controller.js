import {generateAccessToken, generateRefreshToken} from "../utils/generateToken.js";
import { registerService, loginService, getAccessTokenService } from "../services/auth.Service.js";

export async function registerController(req, res) {
    const { newUser, accessToken, refreshToken } = await registerService(req.body,res);
    
    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: false, // Set to true in production
        sameSite: "lax",
        maxAge: 10 * 60 * 1000 // 10 minutes
    });

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: false, // Set to true in production
        sameSite: "lax",
        maxAge: 60 * 60 * 1000 // 1 hour
    });

    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            refreshToken: newUser.refreshToken,
            createdAt: newUser.createdAt,
            updatedAt: newUser.updatedAt,
        }
    });
}

export async function loginController(req, res) {
    const { user, accessToken, refreshToken } = await loginService(req.body,res);

    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: false, // Set to true in production
        sameSite: "lax",
        maxAge: 10 * 60 * 1000 // 10 minutes
    });

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: false, // Set to true in production
        sameSite: "lax",
        maxAge: 60 * 60 * 1000 // 1 hour
    });

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            refreshToken: user.refreshToken,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        }
    });
}

export async function getAccessTokenController(req, res) {
    const refreshToken  = req.cookies.refreshToken;

    if (!refreshToken) {
        return res.status(401).json({ message: "Refresh token not found" });
    }

    const accessToken = await getAccessTokenService(refreshToken);
    
    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: false, // Set to true in production
        sameSite: "lax",
        maxAge: 10 * 60 * 1000 // 10 minutes
    });

    res.status(200).json({
        message: "Access token refreshed successfully",
    });
    
}
