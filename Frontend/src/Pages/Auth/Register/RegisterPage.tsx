import { Link } from "react-router-dom";
import InputsRender from "./InputsRender";
import { Button } from "@/Components/UI";

const RegisterPage = () => {
  return (
    <div>
      <div>
        <InputsRender />
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <p>Already have an account?</p>
        <Link to={"/auth/login"}>
          <Button btnType="secondary" className="bg-transparent shadow-lg">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
