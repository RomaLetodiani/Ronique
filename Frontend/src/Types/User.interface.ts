import { Item } from "./Shared.interface";

export interface UserI extends Item {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  verified: boolean;
  role: string;
  password: string;
  refresh_token: string;
}
