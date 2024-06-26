import { Link } from "react-router-dom";
import { Role } from "../../Types/User.interface";
import { isAdmin } from "../../Utils/Claims";
import Logo from "../../Components/Logo";
import Burger from "../../Components/Burger";
import UserAvatar from "../../Components/UserAvatar";
import { twMerge } from "tailwind-merge";
import { ProfileSideBarTexts } from "../../Utils/Consts";
import authStore from "../../Stores/Auth.store";

type SideBarProps = {
  role?: Role;
  isMobile: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBar = ({ role, isMobile, open, setOpen }: SideBarProps) => {
  const { clearTokens } = authStore();
  return (
    <>
      {isMobile && (
        <div className="absolute z-50 top-[20px] w-full flex justify-between items-center px-5">
          <div>
            <UserAvatar />
          </div>
          <Burger open={open} setOpen={setOpen} />
        </div>
      )}

      {/* Blurred dark Background */}
      {isMobile && (
        <div
          className={twMerge(
            "w-full h-full absolute bg-black/20 backdrop-blur-sm z-30 transition-transform ease-in-out duration-700",
            open ? "translate-y-0" : "-translate-y-full"
          )}
        ></div>
      )}

      <div
        className={twMerge(
          "p-5 justify-between items-center gap-5 bg-primary-500 bg-white rounded-b-lg border-t md:border-t-none transform transition-transform ease-out duration-300",

          isMobile
            ? `absolute -translate-x-full top-0 left-0 w-full flex flex-col z-40 ${
                open && "translate-x-0"
              }`
            : "border-r w-64 h-full border-secondary-200"
        )}
      >
        <Logo size="100" />

        <div>
          <ul>
            {ProfileSideBarTexts.map((text, index) => {
              if (text.path.includes("admin")) {
                if (isAdmin(role)) {
                  return (
                    <div key={index}>
                      <li>{<Link to={text.path}>{text.name}</Link>}</li>
                      <ul>
                        {text.children?.map((child, index) => {
                          return (
                            <li className="ml-5" key={index}>
                              {<Link to={child.path}>{child.name}</Link>}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                }
              }
              return <li key={index}>{<Link to={text.path}>{text.name}</Link>}</li>;
            })}
          </ul>
        </div>

        <div>
          <p>Setting</p>
          <ul>
            <li>Setting</li>
            <li onClick={clearTokens}>Log Out</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
