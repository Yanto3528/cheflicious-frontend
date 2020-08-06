import axios from "axios";
import cookie from "js-cookie";
import { useRecipe } from "../../context/RecipeContext";
import { useAuth } from "../../context/AuthContext";
import Header from "../Header";
import Alert from "../Alert";

const Layout = ({ children, user }) => {
  const { showAddRecipe } = useRecipe();
  const { setUser } = useAuth();

  return (
    <React.Fragment>
      <Alert />
      <Header />
      {!showAddRecipe && children}
    </React.Fragment>
  );
};

export default Layout;
