import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext";
import Header from "../Header";

const Layout = ({ children }) => {
  const { showAddRecipe } = useContext(RecipeContext);
  return (
    <React.Fragment>
      <Header />
      {!showAddRecipe && children}
    </React.Fragment>
  );
};

export default Layout;
