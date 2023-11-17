import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.PROD ? "" : "http://20.127.245.133:8080",
  //baseURL: import.meta.env.PROD ? "" : "http://127.0.0.1:8080",
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = "Bearer " + localStorage.getItem("accessToken");
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);
export default axiosInstance;
