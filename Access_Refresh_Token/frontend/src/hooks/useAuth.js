import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const useAuth = () => {
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onLogin = (data) => {
        console.log("On Login:", data);
    }
    const onRegister = (data) => {
        console.log("On Register:", data);
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