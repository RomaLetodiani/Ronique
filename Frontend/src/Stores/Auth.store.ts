import { create } from "zustand";
import { UserI } from "../Types/User.interface";

interface authStoreI {
  user: UserI | null;
  setUser: (user: UserI) => void;
  accessToken?: string;
  refreshToken?: string;
  setTokens: (token: { access_token: string; refresh_token: string }) => void;
  clearTokens: () => void;
}

const authStore = create<authStoreI>()((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  accessToken: localStorage.getItem("accessToken") || "",
  refreshToken: localStorage.getItem("refreshToken") || "",
  setTokens: (tokens) => {
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

export default authStore;
