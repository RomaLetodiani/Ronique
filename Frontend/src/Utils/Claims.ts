import { Role } from "@/Types/User.interface";

export const isAdmin = (role?: Role): boolean => {
  return role === Role.ADMIN;
};
