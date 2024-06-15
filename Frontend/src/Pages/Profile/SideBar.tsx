import { Link } from "react-router-dom";
import { Role } from "../../Types/User.interface";
import { isAdmin } from "../../Utils/Claims";
import Logo from "../../Components/Logo";
import Burger from "../../Components/Burger";
import UserAvatar from "../../Components/UserAvatar";
import { twMerge } from "tailwind-merge";

type SideBarProps = {
  role?: Role;
  isMobile: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBar = ({ role, isMobile, open, setOpen }: SideBarProps) => {
  return (
    <>
      {isMobile && (
        <div className="absolute z-50 top-[170px] w-full">
          {/*   TODO: user Information */}
          {/* <UserAvatar /> */}
          <Burger open={open} setOpen={setOpen} />
        </div>
      )}

      <div
        className={twMerge(
          "p-5 top-0 justify-between items-center gap-5 bg-primary-500 w-64 z-40 bg-white transform transition-transform duration-300",
          !isMobile && "border-r h-full border-secondary-200",
          isMobile && "fixed w-full h-screen flex flex-col",
          isMobile && (open ? "translate-y-0" : "-translate-y-full")
        )}
      >
        <Logo size="100" />

        <div>
          <p>OverView</p>
          <ul>
            <li>Dashboard</li>
            <li>Inbox</li>
            <li>Task</li>
            {isAdmin(role) && (
              <li>
                <Link to={"admin"}>Admin Panel</Link>
              </li>
            )}
          </ul>
        </div>

        <div>
          <p>Setting</p>
          <ul>
            <li>Setting</li>
            <li>Log Out</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
