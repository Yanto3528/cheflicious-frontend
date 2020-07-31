import RecipeCard from "../../Recipe/RecipeCard";

import { RelatedRecipeContainer } from "./styles";

const RelatedRecipe = () => {
  return (
    <RelatedRecipeContainer>
      <h2>Related Recipe</h2>
      <div>
        <RecipeCard isSidebar />
        <RecipeCard isSidebar />
        <RecipeCard isSidebar />
      </div>
    </RelatedRecipeContainer>
  );
};

export default RelatedRecipe;
