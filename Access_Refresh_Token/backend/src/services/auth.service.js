import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { generateAccessToken, generateRefreshToken } from "../utils/generateToken.js";

export const registerService = async (userData,res) => {
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

    newUser.refreshToken = refreshToken;
    await newUser.save();

    return { newUser, accessToken, refreshToken };

    } catch (error) {
        throw new Error("Error in registering user, Error: " + error.message);
    }
}

export const loginService = async (userData,res) => {
    try{
        const { email, password } = userData;
        if (!email || !password) {
            throw new Error("Email and password are required");
        }
        const ifUserExists = await userModel.findOne({ email })
    if (!ifUserExists) {
        res.status(404).json({ message: "User not found" });    
    }

    const isPasswordValid = await bcrypt.compare(password, ifUserExists.password);
    if (!isPasswordValid) {
        res.status(401).json({ message: "Invalid password" });
    }

    const accessToken = generateAccessToken(ifUserExists._id);
    const refreshToken = generateRefreshToken(ifUserExists._id);

    ifUserExists.refreshToken = refreshToken;
    await ifUserExists.save();

    return { user: ifUserExists, accessToken, refreshToken };

    } catch (error) {
        throw new Error("Error in logging in user, Error: " + error.message);
    }
}

export const getAccessTokenService = async (refreshToken) => {
    const decode = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET)
    if(!decode) throw new Error('Unauthorised')

    const user = await userModel.findById(decode.id)

    if(refreshToken !== user.refreshToken ) throw new Error("Invalid refresh token")

    const accessToken = generateAccessToken(user._id)
    return accessToken; 
}