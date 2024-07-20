import { logo } from "@/Assets";
import { Link } from "react-router-dom";

// @ts-ignore
const tailwindClasses = ["max-w-[100px]", "max-w-[150px]", "max-w-[200px]"];

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
