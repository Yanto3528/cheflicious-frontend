import Link from "next/link";
import RecipeInstructions from "../RecipeInstructions";
import RecipeIngredients from "../RecipeIngredients";

import { RecipeDetailContainer, RecipeDetailHeader } from "./styles";
import Badge, { BadgeGroup } from "../../../styles/shared/Badge";

const SingleRecipeDetail = ({ recipe }) => {
  return (
    <RecipeDetailContainer>
      <img src={recipe.image} alt={`${recipe.slug}-image`} />
      <BadgeGroup>
        {recipe.categories.map((category) => (
          <Badge key={category._id}>{category.value}</Badge>
        ))}
      </BadgeGroup>
      <RecipeDetailHeader>
        <h1>{recipe.title}</h1>
        <span>
          by{" "}
          <Link href="/">
            <a>{recipe.author.name}</a>
          </Link>
        </span>
        <p>{recipe.description}</p>
      </RecipeDetailHeader>
      <RecipeIngredients
        ingredients={recipe.ingredients}
        servings={recipe.servings}
      />
      <RecipeInstructions
        instructions={recipe.instructions}
        cookingTime={recipe.cookingTime}
        difficulty={recipe.difficulty}
      />
    </RecipeDetailContainer>
  );
};

export default SingleRecipeDetail;
