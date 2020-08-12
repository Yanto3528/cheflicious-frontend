import { createContext, useContext, useReducer } from "react";
import recipeReducer from "./recipeReducer";
import recipeTypes from "./recipeTypes";
import useAxios from "../../lib/hook/useAxios";

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const initialState = {
    recipe: null,
    showAddRecipe: false,
    showEditRecipe: false,
  };
  const { API } = useAxios();
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  const setRecipe = (data) =>
    dispatch({ type: recipeTypes.SET_RECIPE, payload: data });

  const toggleShowAddRecipe = () => {
    dispatch({ type: recipeTypes.TOGGLE_SHOW_ADD_RECIPE });
  };

  const toggleShowEditRecipe = () => {
    dispatch({ type: recipeTypes.TOGGLE_SHOW_EDIT_RECIPE });
  };

  const addComment = async (url, payload) => {
    const data = await API("POST", url, payload);
    dispatch({ type: recipeTypes.ADD_COMMENT, payload: data });
  };

  return (
    <RecipeContext.Provider
      value={{
        ...state,
        setRecipe,
        toggleShowAddRecipe,
        toggleShowEditRecipe,
        addComment,
      }}
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
