import api from "../Utils/Api";

const authServices = {
  login: (email: string, password: string) => api.post("/auth/login", { email, password }),
  register: (body: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone_number: string;
  }) => api.post("auth/register", body),
  refreshTokens: (refresh_token: string) => api.post("auth/update-tokens", { refresh_token }),
};

export default authServices;
