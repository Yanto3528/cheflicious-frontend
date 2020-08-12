import recipeTypes from "./recipeTypes";

const recipeReducer = (state, action) => {
  switch (action.type) {
    case recipeTypes.SET_RECIPE:
      return {
        ...state,
        recipe: action.payload,
      };
    case recipeTypes.TOGGLE_SHOW_ADD_RECIPE:
      return {
        ...state,
        showAddRecipe: !state.showAddRecipe,
      };
    case recipeTypes.TOGGLE_SHOW_EDIT_RECIPE:
      return {
        ...state,
        showEditRecipe: !state.showEditRecipe,
      };
    case recipeTypes.ADD_COMMENT:
      return {
        ...state,
        recipe: {
          ...state.recipe,
          comments: [...state.recipe.comments, action.payload],
        },
      };
    default:
      return state;
  }
};

export default recipeReducer;
