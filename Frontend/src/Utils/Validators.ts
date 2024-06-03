const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};
const phoneNumberValidator = (phoneNumber: string) => {
  const re = /\d{9}/; // Updated regex pattern
  return phoneNumber.length > 8 && re.test(phoneNumber);
};
const isValid = (value: string) => value.length > 6;

export { emailValidator, phoneNumberValidator, isValid };
