import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
});

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                await axiosInstance.get("http://localhost:3000/api/auth/get-accessToken", {
                    withCredentials: true,
                });
                return axiosInstance(originalRequest);
            } catch (err) {
                if (window.location.pathname !== "/") {
                    window.location.href = "/";
                }
                // Interveptor ka kaam khatam ho gaya, ab error ko apni jagah bej do
                return Promise.reject(err);
            }
        }
        return Promise.reject(error);
    }
);