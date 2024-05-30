import Button from "../../../Components/UI/Button";
import Input from "../../../Components/UI/Input";
import { useInput } from "../../../Hooks/useInput";
import authServices from "../../../Services/AuthServices";
import authStore from "../../../Stores/Auth.store";
import { emailValidator, isValid, phoneNumberValidator } from "../../../Utils/Validators";

const InputsRender = () => {
  const emailInput = useInput((value) => emailValidator(value));
  const passwordInput = useInput((value) => isValid(value));
  const rePasswordInput = useInput((value) => isValid(value) && value === passwordInput.value);
  const firstNameInput = useInput((value) => isValid(value));
  const lastNameInput = useInput((value) => isValid(value));
  const phoneNumberInput = useInput((value) => phoneNumberValidator(value));
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
    { ...emailInput, label: "Email", errorMessage: "Email is not valid" },
    { ...passwordInput, label: "Password", type: "password" },
    { ...rePasswordInput, label: "Re-Password", type: "password" },
    { ...firstNameInput, label: "First Name" },
    { ...lastNameInput, label: "Last Name" },
    { ...phoneNumberInput, label: "Phone Number" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (errors.some((error) => error)) {
      return;
    }
    authServices
      .register({
        email: emailInput.value,
        password: passwordInput.value,
        first_name: firstNameInput.value,
        last_name: lastNameInput.value,
        phone_number: phoneNumberInput.value,
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
