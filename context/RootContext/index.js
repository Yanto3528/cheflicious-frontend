import RecipeProvider from "../RecipeContext";
import AlertProvider from "../AlertContext";

const RootProvider = ({ children }) => {
  return (
    <AlertProvider>
      <RecipeProvider>{children}</RecipeProvider>
    </AlertProvider>
  );
};

export default RootProvider;
