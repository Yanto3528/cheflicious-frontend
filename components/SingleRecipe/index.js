import { useEffect } from "react";
import { useRecipeContext } from "../../context/RecipeContext";
import RecipeDetail from "./RecipeDetail";
import Comments from "./Comments";
import RelatedRecipe from "./RelatedRecipe";

import { SingleRecipeContainer } from "./styles";
import { RecipeDetailContainer } from "./RecipeDetail/styles";

const SingleRecipe = ({ recipe, relatedRecipes }) => {
  const { setRecipe } = useRecipeContext();

  useEffect(() => {
    setRecipe(recipe);
  }, []);

  return (
    <SingleRecipeContainer>
      <div>
        <RecipeDetail recipe={recipe} />
        <Comments recipe={recipe} />
      </div>
      <RelatedRecipe relatedRecipes={relatedRecipes} />
    </SingleRecipeContainer>
  );
};

export default SingleRecipe;
