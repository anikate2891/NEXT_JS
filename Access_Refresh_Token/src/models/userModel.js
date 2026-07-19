import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: [ true, "Please provide an email"],
    },
    password: {
        type: String,
        required: [ true, "Please provide a password"],
    },
    refreshToken: {
        type: String,
    },
}, {timestamps: true});

const userModel = mongoose.model("Users", userSchema);
export default userModel;