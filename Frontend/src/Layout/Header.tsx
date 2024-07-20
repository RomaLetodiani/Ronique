import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { useState } from "react";
import { useInput, useMediaQuery } from "../Hooks";
import { authStore } from "@/Stores";
import { Burger, Logo, SearchBar, UserAvatar } from "@/Components";
import { Button } from "@/Components/UI";

const Header = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1000px)");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const { user } = authStore();
  const SearchInput = useInput(() => true);
  return (
    <header>
      <div className="p-5 shadow-sm border-b border-secondary-200 flex gap-5 justify-between items-center">
        <Logo size="200" />
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
