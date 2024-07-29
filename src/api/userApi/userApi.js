import { axiosInstance } from "../../utils/axiosInstance";

// User related end points

// Login end point
export const loginApi = async (user) => {
  try {
    const response = await axiosInstance.post(`/auth/login/`, user);
    return response.data;
  } catch (error) {
    console.error("Error Logining in", error);
    throw error;
  }
};

// Register end point
export const registerApi = async (newUser) => {
  try {
    const response = await axiosInstance.post(`/auth/register/`, newUser);
    return response.data;
  } catch (error) {
    console.error("Error registering", error);
    throw error;
  }
};

// Geting user data end point
export const getUserData = async () => {
  try {
    const response = await axiosInstance.get("/auth/user/");
    return response;
  } catch (error) {
    console.log("Error geting user data", error.message);
    throw error;
  }
};

// logout end point
export const logout = async () => {
  try {
    const response = await axiosInstance.post("/auth/logout/");
    return response.data;
  } catch (error) {
    console.log("Error logging out", error.message);
    throw error;
  }
};

// End point to refresh access token
export const refreshToken = async () => {
  try {
    const response = await axiosInstance.post("/auth/refresh-token/");
    return response.data;
  } catch (error) {
    console.log("Error refreshing token", error.message);
    throw error;
  }
};
