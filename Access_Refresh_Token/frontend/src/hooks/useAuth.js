import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const useAuth = () => {
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onLogin = (data) => {
        console.log(data);
    }
    const onRegister = (data) => {
        console.log(data);
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