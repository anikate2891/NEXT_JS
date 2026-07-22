import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
});     

// axiosInstance.interceptors.request.use() 

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        console.log("Interceptors Error ->", error)
        const originalRequest = error.config;
        if  ((error.response && error.response.status === 401 ) || (!originalRequest.retry)) {
            originalRequest.retry = true;
            try{
                const res = await axiosInstance.get('/api/auth/get-accessToken')
                console.log("Access token refreshed successfully:", res.data);
                return axiosInstance(originalRequest);
            } catch(error) {
                window.location.href = "/"; // Redirect to login page
                return Promise.reject(error);
            }
        }
    }
) 
