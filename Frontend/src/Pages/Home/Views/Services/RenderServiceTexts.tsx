import { Link } from "react-router-dom";
import { serviceDesc } from "../../Utils/Services.data";
import Button from "../../../../Components/UI/Button";
import { authStore } from "../../../../Stores";

const RenderServiceTexts = () => {
  const { user } = authStore();
  const linkTo = user ? "/profile" : "/auth/login";
  return (
    <div className="flex-1">
      <h3 className="text-4xl font-bold tracking-wide leading-snug flex flex-col">
        <span>Why Choose</span>
        <span>Online Learning?</span>
      </h3>
      <p className="my-5 leading-normal">{serviceDesc}</p>
      <Link to={linkTo}>
        <Button>Get Started</Button>
      </Link>
    </div>
  );
};

export default RenderServiceTexts;
