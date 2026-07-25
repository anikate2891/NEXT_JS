import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
});

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 || !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                await axiosInstance.get("/api/auth/get-accessToken");
                return axiosInstance(originalRequest);
            } catch (err) {
                    window.location.href = "/";
                    return Promise.reject(err);
            }
        }
    }
);