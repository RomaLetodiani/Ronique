import Input from "../../../Components/UI/Input";
import { useInput } from "../../../Hooks/useInput";

const InputsRender = () => {
  const emailInput = useInput((value) => value.includes("@"));
  const passwordInput = useInput((value) => value.length > 6);
  const rePasswordInput = useInput((value) => value.length > 6 && value === passwordInput.value);
  const firstNameInput = useInput((value) => value.length > 6);
  const lastNameInput = useInput((value) => value.length > 6);
  const phoneNumberInput = useInput((value) => value.length > 6);

  const inputs = [
    { ...emailInput, label: "Email", errorMessage: "Email is not valid" },
    { ...passwordInput, label: "Password" },
    { ...rePasswordInput, label: "Re-Password" },
    { ...firstNameInput, label: "First Name" },
    { ...lastNameInput, label: "Last Name" },
    { ...phoneNumberInput, label: "Phone Number" },
  ];
  return (
    <div>
      {inputs.map((input, index) => (
        <div key={index}>
          <Input {...input} />
        </div>
      ))}
    </div>
  );
};

export default InputsRender;
