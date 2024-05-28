import { create } from "zustand";
import { UserI } from "../Types/User.interface";
import { jwtDecode } from "jwt-decode";

interface authStoreI {
  user: null | UserI;
  accessToken?: string;
  refreshToken?: string;
  setTokens: (token: { access_token: string; refresh_token: string }) => void;
  clearTokens: () => void;
}

const authStore = create<authStoreI>()((set) => ({
  user: null,
  accessToken: localStorage.getItem("accessToken") || "",
  refreshToken: localStorage.getItem("refreshToken") || "",
  setTokens: (tokens) => {
    const decodedUser = jwtDecode(tokens.access_token) as UserI;
    if (!decodedUser) {
      // TODO: Handle error, maybe redirect to login page, Clear tokens
      console.error("Invalid token");
      authStore.getState().clearTokens();
      return;
    }
    set({ user: decodedUser });
    localStorage.setItem("accessToken", tokens.access_token);
    localStorage.setItem("refreshToken", tokens.refresh_token);
    set({ accessToken: tokens.access_token, refreshToken: tokens.refresh_token });
  },
  clearTokens: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    set({ accessToken: "", refreshToken: "" });
  },
}));

const accessToken = localStorage.getItem("accessToken");
if (accessToken) {
  try {
    const decodedUser = jwtDecode<UserI>(accessToken);
    authStore.setState({ user: decodedUser });
  } catch (error) {
    // Handle error if token is invalid
    console.error("Invalid token:", error);
    authStore.getState().clearTokens();
  }
}

export default authStore;
