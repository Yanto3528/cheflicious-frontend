import RecipeCard from "../../Recipe/RecipeCard";

import { RelatedRecipeContainer } from "./styles";

const RelatedRecipe = ({ relatedRecipes }) => {
  return (
    <RelatedRecipeContainer>
      <h2>Related Recipe</h2>
      <div>
        {relatedRecipes.map((recipe) => (
          <RecipeCard key={recipe._id} small recipe={recipe} />
        ))}
      </div>
    </RelatedRecipeContainer>
  );
};

export default RelatedRecipe;
