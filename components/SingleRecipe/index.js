import { useEffect } from "react";
import { useRecipeContext } from "../../context/RecipeContext";
import RecipeDetail from "./RecipeDetail";
import Comments from "./Comments";
import RelatedRecipe from "./RelatedRecipe";

import { SingleRecipeContainer } from "./styles";

const SingleRecipe = ({ recipe, relatedRecipes }) => {
  const { setRecipe, recipe: currentRecipe } = useRecipeContext();

  useEffect(() => {
    setRecipe(recipe);
  }, []);

  if (!currentRecipe) {
    return null;
  }

  return (
    <SingleRecipeContainer>
      <div>
        <RecipeDetail recipe={currentRecipe} />
        <Comments recipe={currentRecipe} />
      </div>
      <RelatedRecipe relatedRecipes={relatedRecipes} />
    </SingleRecipeContainer>
  );
};

export default SingleRecipe;
