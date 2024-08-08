import axiosInstance from "./index";
import axios from "axios";

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

export const getBulkUsers = async (filter) => {
  try {
    const response = await axiosInstance.get("/user/bulk?filter=" + filter);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const transferMoney = async (data) => {
  try {
    const response = await axiosInstance.post("/account/transfer", data);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getBalance = async () => {
  try {
    const response = await axiosInstance.get("/account/balance");
    return response;
  } catch (error) {
    return error.response;
  }
};
