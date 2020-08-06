import { useRecipe } from "../../context/RecipeContext";
import { useAuth } from "../../context/AuthContext";
import Header from "../Header";

const Layout = ({ children, user }) => {
  const { showAddRecipe } = useRecipe();
  const { setUser } = useAuth();

  return (
    <React.Fragment>
      <Header />
      {!showAddRecipe && children}
    </React.Fragment>
  );
};

export default Layout;
