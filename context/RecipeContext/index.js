import { createContext, useContext, useReducer } from "react";
import recipeReducer from "./recipeReducer";
import recipeTypes from "./recipeTypes";

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const initialState = {
    recipe: null,
    showAddRecipe: false,
    showEditRecipe: false,
  };
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  const setRecipe = (data) =>
    dispatch({ type: recipeTypes.SET_RECIPE, payload: data });

  const toggleShowAddRecipe = () => {
    dispatch({ type: recipeTypes.TOGGLE_SHOW_ADD_RECIPE });
  };

  const toggleShowEditRecipe = () => {
    dispatch({ type: recipeTypes.TOGGLE_SHOW_EDIT_RECIPE });
  };

  return (
    <RecipeContext.Provider
      value={{ ...state, setRecipe, toggleShowAddRecipe, toggleShowEditRecipe }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);
  return context;
};

export default RecipeProvider;
