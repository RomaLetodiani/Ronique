import { create } from "zustand";
import { UserDecodedI, UserI } from "../Types/User.interface";
import { jwtDecode } from "jwt-decode";

interface authStoreI {
  user: null | UserDecodedI;
  fullUser: null | UserI;
  setFullUser: (user: UserI) => void;
  accessToken?: string;
  refreshToken?: string;
  setTokens: (token: { access_token: string; refresh_token: string }) => void;
  clearTokens: () => void;
}

const authStore = create<authStoreI>()((set) => ({
  user: null,
  fullUser: null,
  setFullUser: (user) => set({ fullUser: user }),
  accessToken: localStorage.getItem("accessToken") || "",
  refreshToken: localStorage.getItem("refreshToken") || "",
  setTokens: (tokens) => {
    const decodedUser = jwtDecode(tokens.access_token) as UserDecodedI;
    if (!decodedUser) {
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
    set({ user: null, accessToken: "", refreshToken: "" });
  },
}));

const accessToken = localStorage.getItem("accessToken");
if (accessToken) {
  try {
    const decodedUser = jwtDecode<UserDecodedI>(accessToken);
    authStore.setState({ user: decodedUser });
  } catch (error) {
    // Handle error if token is invalid
    console.error("Invalid token:", error);
    authStore.getState().clearTokens();
  }
}

export default authStore;
