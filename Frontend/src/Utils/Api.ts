import axios from "axios";
import qs from "qs";
import authStore from "../Stores/Auth.store";
import authServices from "../Services/AuthServices";

const baseUrl =
  import.meta.env.VITE_ENV === "development"
    ? import.meta.env.VITE_LOCAL_API
    : import.meta.env.VITE_PROD_API;

const api = axios.create({
  baseURL: baseUrl,
});

api.interceptors.request.use((config) => {
  config.paramsSerializer = (params) => qs.stringify(params, { arrayFormat: "repeat" });
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.config && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = authStore.getState().refreshToken;
        if (!refreshToken) {
          return Promise.reject(error);
        }

        const { data } = await authServices.refreshTokens(refreshToken);

        authStore.getState().setTokens(data);
        originalRequest.headers["Authorization"] = `Bearer ${data.access_token}`;

        return api(originalRequest);
      } catch (error) {
        console.log("🚀 ~ error:", error);
        console.error("Failed to refresh tokens");

        authStore.getState().clearTokens();

        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
export default api;
