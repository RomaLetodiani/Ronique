const emailValidator = (email?: string) => {
  if (!email) return false;
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};
const phoneNumberValidator = (phoneNumber?: string) => {
  if (!phoneNumber) return false;
  const re = /\d{9}/; // Updated regex pattern
  return phoneNumber.length > 8 && re.test(phoneNumber);
};
const isValid = (value?: string | number) => {
  if (typeof value === "number") return value > 0;
  return value ? value.trim().length > 5 : false;
};

// TODO - Add more validators for Course DTO

export { emailValidator, phoneNumberValidator, isValid };
