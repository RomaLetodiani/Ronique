import { Link, useLocation } from "react-router-dom";
import Logo from "../Components/Logo";
import { FooterTextLeft, FooterTextRight } from "../Utils/Consts";
import SocialsDiv from "../Components/Socials";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <div
      className={`border-t flex flex-col min-[540px]:flex-row gap-16 justify-between border-secondary-200 p-5`}
    >
      <div className="flex flex-col items-start gap-8">
        <Logo size="150" />
        <div className="flex flex-col gap-3">
          {FooterTextLeft.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <img className="w-6 h-6" src={item.icon} alt={item.alt} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={"flex flex-col md:flex-row gap-5 "}>
        <div className="flex gap-10">
          <div className="flex flex-col gap-3 min-w-[70px]">
            {FooterTextRight.firstHalf.map((item, index) => (
              <Link key={index} to={item.path}>
                <p className={`${pathname === item.path && "text-secondary-500 font-bold"}`}>
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {FooterTextRight.secondHalf.map((item, index) => (
              <Link key={index} to={item.path}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <SocialsDiv />
      </div>
    </div>
  );
};

export default Footer;
