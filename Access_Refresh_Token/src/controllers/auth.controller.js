import {generateAccessToken, generateRefreshToken} from "../utils/generateToken.js";

export async function registerController(req, res) {
   const { newUser, accessToken, refreshToken } = await registerService(req.body);
    
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
            email: newUser.email
        }
    });
}

export async function loginController(req, res) {}