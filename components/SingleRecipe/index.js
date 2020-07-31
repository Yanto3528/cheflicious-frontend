import RecipeDetail from "./RecipeDetail";
import Comments from "./Comments";
import RelatedRecipe from "./RelatedRecipe";

import { SingleRecipeContainer } from "./styles";

const SingleRecipe = () => {
  return (
    <SingleRecipeContainer>
      <div>
        <RecipeDetail />
        <Comments />
      </div>
      <RelatedRecipe />
    </SingleRecipeContainer>
  );
};

export default SingleRecipe;
