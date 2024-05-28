import { Item } from "./Shared.interface";

export enum Role {
  ADMIN = "admin",
  USER = "customer",
}

export interface UserI extends Item {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  verified: boolean;
  role: Role;
  password: string;
  refresh_token: string;
}
