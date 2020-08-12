import Link from "next/link";
import useSWR from "swr";
import Searchbar from "../Searchbar";
import Menu from "../Menu";
import AuthMenu from "../Menu/AuthMenu";
import useToggle from "../../lib/hook/useToggle";

import {
  HeaderContainer,
  Logo,
  Nav,
  HamburgerMenuContainer,
  HamburgerMenu,
} from "./styles";
import Container from "../../styles/shared/Container";

const Header = () => {
  const { data: currentUser } = useSWR("/api/users/me", {
    revalidateOnFocus: false,
  });
  const [showMenu, toggleMenu] = useToggle();

  return (
    <HeaderContainer>
      <Container>
        <Nav>
          <div>
            <Link href="/">
              <Logo src="/logo.svg" alt="cheflicious-logo" />
            </Link>
            <Searchbar />
          </div>
          {currentUser ? <AuthMenu /> : <Menu />}
          {/* <HamburgerMenuContainer onClick={toggleMenu}>
            <HamburgerMenu active={showMenu} />
          </HamburgerMenuContainer> */}
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
