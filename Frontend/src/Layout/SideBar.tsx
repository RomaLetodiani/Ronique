import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";
import BlurBackground from "../Components/BlurBackground";
import authStore from "../Stores/Auth.store";
import UserAvatar from "../Components/UserAvatar";
import { navBarText } from "../Utils/Const";
import { Link, useLocation } from "react-router-dom";

type SideBarProps = {
  isMobile: boolean;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const SideBar = ({ isMobile, open, setOpen }: SideBarProps) => {
  const { user } = authStore();
  const { pathname } = useLocation();
  const handleOnClick = () => {
    setOpen(false);
  };
  return (
    isMobile && (
      <>
        {/* Blurred dark Background */}
        <BlurBackground absOrFixed="fixed" zIndex={60} isMobile={isMobile} open={open} />
        <aside
          className={twMerge(
            "p-5 pt-28 bg-primary/80 bg h-full",
            "transform transition-transform ease-out duration-300",
            isMobile &&
              `fixed translate-x-full top-0 right-0 flex flex-col z-[60] ${
                open && "translate-x-0 w-72"
              }`
          )}
        >
          <div>
            {user && (
              <span onClick={handleOnClick}>
                <UserAvatar />
              </span>
            )}
            <div className="mt-10 flex flex-col items-end gap-4">
              {navBarText.map((item, index) => {
                return (
                  <Link onClick={handleOnClick} to={item.path} key={index}>
                    <div>
                      <h4
                        className={twMerge(
                          " font-semibold text-right hover:text-secondary-200 transition-all duration-300 ease-in-out",
                          pathname === item.path
                            ? "text-secondary-500 hover:text-secondary-500"
                            : "text-white"
                        )}
                      >
                        {item.name}
                      </h4>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </aside>
      </>
    )
  );
};

export default SideBar;
