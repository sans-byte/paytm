import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  baseURL: "http://localhost:3000/api/v1/",
});

export default axiosInstance;
