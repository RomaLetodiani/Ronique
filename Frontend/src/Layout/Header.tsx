import { Link } from "react-router-dom";
import Button from "../Components/UI/Button";
import useMediaQuery from "../Hooks/UseMediaQuery";
import authStore from "../Stores/Auth.store";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import UserAvatar from "../Components/UserAvatar";
import Logo from "../Components/Logo";
import SearchBar from "../Components/SearchBar/SearchBar";
import { useInput } from "../Hooks/useInput";
import { useState } from "react";
import Burger from "../Components/Burger";

const Header = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1000px)");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const { user } = authStore();
  const SearchInput = useInput(() => true);
  return (
    <header>
      <div className="p-5 shadow-sm flex gap-5 justify-between items-center">
        <Logo size="250" />
        {!isMobile && <SearchBar searchInput={SearchInput} />}
        {isDesktop ? <NavBar /> : <SideBar isMobile={!isDesktop} open={open} setOpen={setOpen} />}

        <div className="flex gap-5 items-center justify-center">
          {!isDesktop && <Burger open={open} setOpen={setOpen} />}

          {!isSmallScreen &&
            (user ? (
              <UserAvatar />
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
            ))}
        </div>
      </div>
      {isMobile && (
        <div className="px-5 py-3 shadow-md">
          <SearchBar searchInput={SearchInput} />
        </div>
      )}
    </header>
  );
};

export default Header;
