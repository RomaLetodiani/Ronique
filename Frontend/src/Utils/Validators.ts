import { z } from "zod";

const emailValidator = (email?: string) => {
  return z.string().email().safeParse(email).success;
};

const phoneNumberValidator = (phoneNumber?: string) => {
  return z
    .string()
    .regex(/^\d{9}$/)
    .safeParse(phoneNumber).success;
};

const isValid = (value?: string | number) => {
  if (typeof value === "number") {
    return true;
  }

  return z.string().safeParse(value).success;
};

export { emailValidator, phoneNumberValidator, isValid };
