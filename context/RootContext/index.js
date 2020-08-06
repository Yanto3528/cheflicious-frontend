import AuthProvider from "../AuthContext";
import RecipeProvider from "../RecipeContext";
import AlertProvider from "../AlertContext";

const RootProvider = ({ children }) => {
  return (
    <AuthProvider>
      <RecipeProvider>
        <AlertProvider>{children}</AlertProvider>
      </RecipeProvider>
    </AuthProvider>
  );
};

export default RootProvider;
