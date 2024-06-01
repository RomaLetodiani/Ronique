import { Link } from "react-router-dom";
import Button from "../Components/UI/Button";
import useMediaQuery from "../Hooks/UseMediaQuery";
import authStore from "../Stores/Auth.store";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import UserAvatar from "../Components/UserAvatar";
import Logo from "../Components/Logo";

const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");
  const { user } = authStore();
  return (
    <div className="p-5 shadow-md flex justify-between items-center">
      <Logo size="250" />
      <div>searchBar</div>
      {isDesktop ? <NavBar /> : <SideBar />}
      {user ? (
        <UserAvatar user={user} />
      ) : (
        <div className="flex gap-5">
          <Link to={"auth"}>
            <Button className="py-1">Login</Button>
          </Link>
          <Link to={"auth/register"}>
            <Button className="py-1" btnType="secondary">
              Register
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
