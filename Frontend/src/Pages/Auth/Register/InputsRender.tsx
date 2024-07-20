import { toast } from "react-toastify";
import Button from "../../../Components/UI/Button";
import Input from "../../../Components/UI/Input";
import authServices from "../../../Services/AuthServices";
import { emailValidator, isValid, phoneNumberValidator } from "../../../Utils/Validators";
import { authStore } from "../../../Stores";
import { useInput } from "../../../Hooks";

const InputsRender = () => {
  const emailInput = useInput((value) => typeof value === "string" && emailValidator(value));
  const passwordInput = useInput((value) => isValid(value));
  const rePasswordInput = useInput((value) => isValid(value) && value === passwordInput.value);
  const firstNameInput = useInput((value) => isValid(value));
  const lastNameInput = useInput((value) => isValid(value));
  const phoneNumberInput = useInput(
    (value) => typeof value === "string" && phoneNumberValidator(value)
  );
  const { setTokens } = authStore();
  const errors = [
    emailInput.hasError,
    passwordInput.hasError,
    rePasswordInput.hasError,
    firstNameInput.hasError,
    lastNameInput.hasError,
    phoneNumberInput.hasError,
    !emailInput.value,
    !passwordInput.value,
    !rePasswordInput.value,
    !firstNameInput.value,
    !lastNameInput.value,
    !phoneNumberInput.value,
  ];
  const inputs = [
    { ...emailInput, label: "Email", autoComplete: "email", errorMessage: "Email is not valid" },
    { ...passwordInput, label: "Password", autoComplete: "new-password", type: "password" },
    { ...rePasswordInput, label: "Re-Password", autoComplete: "rePassword", type: "password" },
    { ...firstNameInput, label: "First Name", autoComplete: "first name" },
    { ...lastNameInput, label: "Last Name", autoComplete: "last name" },
    { ...phoneNumberInput, label: "Phone Number", autoComplete: "phone" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (errors.some((error) => error)) {
      toast.error("Please fill all fields correctly");
      return;
    }
    authServices
      .register({
        email: emailInput.value as string,
        password: passwordInput.value as string,
        first_name: firstNameInput.value as string,
        last_name: lastNameInput.value as string,
        phone_number: phoneNumberInput.value as string,
      })
      .then(({ data }) => {
        setTokens(data);
      });
  };
  return (
    <form className="flex flex-col gap-5 mb-5" onSubmit={(e) => handleSubmit(e)}>
      {inputs.map((input, index) => (
        <div key={index}>
          <Input {...input} />
        </div>
      ))}
      <Button>Register</Button>
    </form>
  );
};

export default InputsRender;
