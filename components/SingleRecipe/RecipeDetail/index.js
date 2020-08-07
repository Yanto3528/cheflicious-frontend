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
          <Link
            href="/recipes/categories/[slug]"
            as={`/recipes/categories/${category.slug}`}
            key={category._id}
          >
            <Badge>{category.value}</Badge>
          </Link>
        ))}
      </BadgeGroup>
      <RecipeDetailHeader>
        <h1>{recipe.title}</h1>
        <span>
          by{" "}
          <Link href="/profile/:id" as={`/profile/${recipe.author._id}`}>
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
