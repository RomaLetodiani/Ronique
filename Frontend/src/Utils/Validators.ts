const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};
const phoneNumberValidator = (phoneNumber: string) => {
  const re = /\d{10,}/; // Updated regex pattern
  return phoneNumber.length > 9 && re.test(phoneNumber);
};
const isValid = (value: string) => value.length > 6;

export { emailValidator, phoneNumberValidator, isValid };
