import AuthProvider from "../AuthContext";
import RecipeProvider from "../RecipeContext";
import AlertProvider from "../AlertContext";

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
