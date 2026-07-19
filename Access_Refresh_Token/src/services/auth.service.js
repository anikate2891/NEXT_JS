import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";


export const registerService = async (userData) => {
    try{
        const { name, email, password } = userData;
        if (!email || !password) {
            throw new Error("Email and password are required");
        }
        const ifUserExists = await userModel.findOne({ email });
    if (ifUserExists) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hashSync(password, 10);
    const newUser = await userModel.create({
        name,
        email,
        password: hashedPassword
    });

    const accessToken = generateAccessToken(newUser._id);
    const refreshToken = generateRefreshToken(newUser._id);

    return { newUser, accessToken, refreshToken };

    } catch (error) {
        throw new Error("Error in registering user, Error: " + error.message);
    }
}

export const loginService = async (userData) => {
    try{} catch (error) {
        throw new Error("Error in logging in user, Error: " + error.message);
    }
}