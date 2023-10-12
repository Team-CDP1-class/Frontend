import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.PROD ? "" : "http://localhost:8080",
});
export default axiosInstance;
