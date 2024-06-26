import { Link } from "react-router-dom";
import { logo } from "./Shared/Assets/Assets";

// @ts-ignore
const tailwindClasses = ["max-w-[100px]", "max-w-[150px]", "max-w-[250px]"];

const Logo = ({ size }: { size: string }) => {
  return (
    <Link to={"/"}>
      <div className={`max-w-[${size}px]`}>
        <img className="w-full" src={logo} alt="Ronique Logo" />
      </div>
    </Link>
  );
};

export default Logo;
