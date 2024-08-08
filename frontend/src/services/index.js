import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

// So that it look for token every time a new request is send
// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify config before the request is sent
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Example: Logging the request config
    console.log("Request Config:", config);

    return config;
  },
  (error) => {
    // Handle the error
    return Promise.reject(error);
  }
);

export default axiosInstance;
