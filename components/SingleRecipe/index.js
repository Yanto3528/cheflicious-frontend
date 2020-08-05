import useSWR from "swr";
import RecipeDetail from "./RecipeDetail";
import Comments from "./Comments";
import RelatedRecipe from "./RelatedRecipe";

import { SingleRecipeContainer } from "./styles";

const SingleRecipe = ({ recipe, relatedRecipes }) => {
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
