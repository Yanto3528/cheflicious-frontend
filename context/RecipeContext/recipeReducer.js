import recipeTypes from "./recipeTypes";

const recipeReducer = (state, action) => {
  switch (action.type) {
    case recipeTypes.TOGGLE_SHOW_ADD_RECIPE:
      return {
        ...state,
        showAddRecipe: !state.showAddRecipe,
      };
    default:
      return state;
  }
};

export default recipeReducer;
