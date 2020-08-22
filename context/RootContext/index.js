import RecipeProvider from "../RecipeContext";
import AlertProvider from "../AlertContext";
import AuthProvider from "../AuthContext";

const RootProvider = ({ children }) => {
  return (
    <AlertProvider>
      <AuthProvider>
        <RecipeProvider>{children}</RecipeProvider>
      </AuthProvider>
    </AlertProvider>
  );
};

export default RootProvider;
