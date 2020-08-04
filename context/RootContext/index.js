import AuthProvider from "../AuthContext";
import RecipeProvider from "../RecipeContext";

const RootProvider = ({ children }) => {
  return (
    <AuthProvider>
      <RecipeProvider>{children}</RecipeProvider>
    </AuthProvider>
  );
};

export default RootProvider;
