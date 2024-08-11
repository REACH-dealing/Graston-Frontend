import axios from "axios";

// Axios instance to set base url of the end-points, headers, and timeout(optional)
// With Authorization in header

export const axiosInstance = axios.create({
  baseURL: `https://graston-backend-production.up.railway.app`,
  timeout: 10000,
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `${localStorage.getItem("access")}`,
  },
});

// Axios instance without authorization in header
export const axiosInstanceWithAuth = axios.create({
  baseURL: `https://graston-backend-production.up.railway.app`,
  timeout: 10000,
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `${localStorage.getItem("access")}`,
  },
});
