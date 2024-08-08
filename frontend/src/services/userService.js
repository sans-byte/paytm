import axiosInstance from "./index";

export const signUp = async (data) => {
  try {
    const response = await axiosInstance.post("/user/signup", data);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const signin = async (data) => {
  try {
    const response = await axiosInstance.post("/user/signin", data);
    return response;
  } catch (error) {
    return error.response;
  }
};
