import Button from "../../../Components/UI/Button";
import { useInput } from "../../../Hooks/useInput";
import Input from "../../../Components/UI/Input";
import authServices from "../../../Services/AuthServices";
import authStore from "../../../Stores/Auth.store";

const LoginPage = () => {
  const emailInput = useInput(
    (value) => value.includes("@") || value === import.meta.env.VITE_ADMIN_EMAIL
  );
  const passwordInput = useInput((value) => value.length > 6);

  const { user, setTokens } = authStore();
  console.log("🚀 ~ LoginPage ~ user:", user);

  const login = () => {
    authServices
      .login({ email: emailInput.value, password: passwordInput.value })
      .then(({ data }) => {
        setTokens(data);
      });
  };
  return (
    <div>
      <div>
        <Input label="Email" {...emailInput} />
        <Input label="Password" {...passwordInput} />
        <div>
          <Button onClick={login}>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
