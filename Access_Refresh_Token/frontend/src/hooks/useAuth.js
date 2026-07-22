import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../config/axios.jsx";
import { useDispatch } from "react-redux";
import { addUser } from "../state/AuthReducer.jsx";

export const useAuth = () => {
    const navigate = useNavigate(); 
    const dispsatch = useDispatch();

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onLogin = async (data) => {
        console.log("On Login:", data);
        try{
            const response = await axiosInstance.post("/api/auth/login", data);
            console.log("Login response:", response.data);
            dispsatch(addUser(response.data.user));
        } catch(err){
            console.error("Login error:", err);
        }
    }
    const onRegister = async (data) => {
        console.log("On Register:", data);
        try{
            const response = await axiosInstance.post("/api/auth/register", data);
            console.log("Register response:", response.data);
        } catch(err){
            console.error("Register error:", err);
        }
    }

    return {
        register,
        handleSubmit,
        errors,
        onLogin,
        onRegister,
        navigate
    }
}