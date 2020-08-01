import { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../../context/AuthContext";
import Searchbar from "../Searchbar";
import Menu from "../Menu";
import AuthMenu from "../Menu/AuthMenu";

import { HeaderContainer, Logo, Nav } from "./styles";
import Container from "../../styles/shared/Container";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <HeaderContainer>
      <Container>
        <Nav>
          <Link href="/">
            <Logo src="/logo.svg" alt="cheflicious-logo" />
          </Link>
          <Searchbar />
          {user ? <AuthMenu /> : <Menu />}
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
