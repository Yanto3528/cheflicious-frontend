import { useContext, useEffect } from "react";
import { RecipeContext } from "../../context/RecipeContext";
import { AuthContext } from "../../context/AuthContext";
import Header from "../Header";

const Layout = ({ children, user }) => {
  const { showAddRecipe } = useContext(RecipeContext);
  const { setUser } = useContext(AuthContext);
  // useEffect(() => {
  //   if (user !== null) {
  //     setUser(user);
  //   }
  // }, []);

  return (
    <React.Fragment>
      <Header />
      {!showAddRecipe && children}
    </React.Fragment>
  );
};

export default Layout;
