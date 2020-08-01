import Link from "next/link";
import { NavMenu, NavMenuItem, NavLink, SignupButton } from "./styles";

const Menu = () => {
  return (
    <NavMenu>
      <NavMenuItem>
        <Link href="/categories">
          <NavLink>Categories</NavLink>
        </Link>
      </NavMenuItem>
      <NavMenuItem>
        <Link href="/signin">
          <NavLink>Log in</NavLink>
        </Link>
      </NavMenuItem>
      <NavMenuItem>
        <Link href="/signup">
          <SignupButton>Sign up</SignupButton>
        </Link>
      </NavMenuItem>
    </NavMenu>
  );
};

export default Menu;
