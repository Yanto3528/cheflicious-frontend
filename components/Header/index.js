import Link from "next/link";
import useSWR from "swr";
import Searchbar from "../Searchbar";
import Menu from "../Menu";
import AuthMenu from "../Menu/AuthMenu";

import { HeaderContainer, Logo, Nav } from "./styles";
import Container from "../../styles/shared/Container";

const Header = () => {
  const { data: currentUser } = useSWR("/api/users/me", {
    revalidateOnFocus: false,
  });

  return (
    <HeaderContainer>
      <Container>
        <Nav>
          <Link href="/">
            <Logo src="/logo.svg" alt="cheflicious-logo" />
          </Link>
          <Searchbar />
          {currentUser ? <AuthMenu /> : <Menu />}
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
