import { Link, useLocation } from "react-router-dom";
import { navBarText } from "../Utils/Const";
import { twMerge } from "tailwind-merge";
import { CartWishlistButton } from "@/Components";

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <nav>
      <ul className="flex items-center gap-5">
        {navBarText.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              <li
                className={twMerge(
                  "hover:text-secondary-500 ease-in-out transition-all duration-200",
                  pathname === item.path && "text-secondary-500 font-bold"
                )}
              >
                {item.name}
              </li>
            </Link>
          );
        })}
        <li>
          <CartWishlistButton path="/wishlist" isWishlist />
        </li>
        <li>
          <CartWishlistButton path="/cart" isCart />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
