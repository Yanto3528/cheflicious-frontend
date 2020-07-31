import Searchbar from "../Searchbar";

import Link from "next/link";
import Container from "../../styles/shared/Container";

import { HeaderContainer, Logo, Nav, NavMenu, NavMenuItem } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Nav>
          <Link href="/">
            <Logo src="/logo.svg" alt="" />
          </Link>
          <Searchbar />
          <NavMenu>
            <NavMenuItem>
              <Link href="/categories">
                <a>Categories</a>
              </Link>
            </NavMenuItem>
            <NavMenuItem>
              <Link href="/login">
                <a>Log in</a>
              </Link>
            </NavMenuItem>
            <NavMenuItem>
              <Link href="/signup">
                <a className="btn-signup">Sign up</a>
              </Link>
            </NavMenuItem>
          </NavMenu>
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
