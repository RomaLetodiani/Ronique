import Button from "../../../Components/UI/Button";
import { useInput } from "../../../Hooks/useInput";
import Input from "../../../Components/UI/Input";
import authServices from "../../../Services/AuthServices";
import authStore from "../../../Stores/Auth.store";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const emailInput = useInput(
    (value) => value.includes("@") || value === import.meta.env.VITE_ADMIN_EMAIL
  );
  const passwordInput = useInput((value) => value.length > 6);

  const { setTokens } = authStore();

  const login = () => {
    authServices
      .login({ email: emailInput.value, password: passwordInput.value })
      .then(({ data }) => {
        setTokens(data);
      });
  };
  return (
    <div>
      <div className="flex gap-5 flex-col">
        <Input label="Email" {...emailInput} />
        <Input label="Password" type="password" {...passwordInput} />
        <Button className="w-full" onClick={login}>
          Login
        </Button>
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <p>Don't have an account?</p>
        <Link to={"/auth/register"}>
          <Button btnType="secondary" className="bg-transparent shadow-lg">
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
