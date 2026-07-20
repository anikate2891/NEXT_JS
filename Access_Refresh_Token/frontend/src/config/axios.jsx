import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com",
});     

// axiosInstance.interceptors.request.use() 

// axiosInstance.interceptors.response.use(
//     (response) => {
//         console.log("This is the response of instence ->", response)
//         // return response;
//     },
//     (error) => {
//         console.log("This is the error of response instent ->", error)

//         // if (error.response && error.response.status === 401) {
//         //     axiosInstance.post('/get-accessToken')
//         // }
//     }
// ) 
