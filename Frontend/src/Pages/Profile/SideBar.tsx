import { Link } from "react-router-dom";
import { Role } from "@/Types/User.interface";
import { twMerge } from "tailwind-merge";
import { authStore } from "@/Stores";
import { BlurBackground, Burger, Logo, UserAvatar } from "@/Components";
import { ProfileSideBarTexts } from "@/Utils/Data";
import { isAdmin } from "@/Utils";

type SideBarProps = {
  role?: Role;
  isMobile: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBar = ({ role, isMobile, open, setOpen }: SideBarProps) => {
  const { clearTokens } = authStore();
  return (
    <aside>
      {isMobile && (
        <div className="absolute z-50 top-[20px] w-full flex justify-between items-center px-5">
          <div>
            <UserAvatar />
          </div>
          <Burger open={open} setOpen={setOpen} />
        </div>
      )}

      {/* Blurred dark Background */}
      <BlurBackground absOrFixed="absolute" isMobile={isMobile} open={open} zIndex={30} />
      <div
        className={twMerge(
          "p-5 justify-between items-center gap-5 bg-white rounded-b-lg",
          "transform transition-transform ease-out duration-300",
          isMobile
            ? `absolute -translate-x-full top-0 left-0 w-full flex flex-col z-40 ${
                open && "translate-x-0 pt-28"
              }`
            : "border-r w-64 h-full border-secondary-200"
        )}
      >
        <Logo size="100" />

        <div>
          <ul>
            {ProfileSideBarTexts.map((text, index) => {
              if (text.path.includes("admin") && !isAdmin(role)) {
                return null;
              }

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
            })}
          </ul>
        </div>

        <div>
          <ul>
            <li>Setting</li>
            <li onClick={clearTokens}>Log Out</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
