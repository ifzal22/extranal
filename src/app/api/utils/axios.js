import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://blog-api-vercel.onrender.com/api",
});

export default axiosInstance;
