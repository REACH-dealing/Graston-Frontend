import axios from "axios";

// Axios instance to set base url of the end point and headers and timeout(optional)

export const axiosInstance = axios.create({
  baseURL: `https://f3b7-197-42-1-151.ngrok-free.app`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
