import axios from "axios";
import qs from "qs";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use((config) => {
  config.paramsSerializer = (params) => qs.stringify(params, { arrayFormat: "repeat" });
  return config;
});

export default api;
