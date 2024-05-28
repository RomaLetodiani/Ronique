import { Link } from "react-router-dom";
import Button from "../../../Components/UI/Button";
import InputsRender from "./InputsRender";

const RegisterPage = () => {
  return (
    <div>
      <div>
        <InputsRender />
      </div>
      <div>
        <Link to={"/auth/login"}>
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
