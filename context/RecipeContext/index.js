import { createContext, useReducer } from "react";
import recipeReducer from "./recipeReducer";
import recipeTypes from "./recipeTypes";

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const initialState = {
    showAddRecipe: false,
  };
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  const toggleShowAddRecipe = () => {
    dispatch({ type: recipeTypes.TOGGLE_SHOW_ADD_RECIPE });
  };

  return (
    <RecipeContext.Provider value={{ ...state, toggleShowAddRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
