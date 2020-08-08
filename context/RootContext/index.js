import AuthProvider from "../AuthContext";
import RecipeProvider from "../RecipeContext";
import AlertProvider from "../AlertContext";
import NotificationProvider from "../NotificationContext";

const RootProvider = ({ children }) => {
  return (
    <AlertProvider>
      <AuthProvider>
        <RecipeProvider>
          <NotificationProvider>{children}</NotificationProvider>
        </RecipeProvider>
      </AuthProvider>
    </AlertProvider>
  );
};

export default RootProvider;
