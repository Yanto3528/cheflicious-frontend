import Link from "next/link";
import RecipeInstructions from "../RecipeInstructions";
import RecipeIngredients from "../RecipeIngredients";

import { RecipeDetailContainer, RecipeDetailHeader } from "./styles";
import Badge, { BadgeGroup } from "../../../styles/shared/Badge";

const SingleRecipeDetail = () => {
  return (
    <RecipeDetailContainer>
      <img
        src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2153&q=80"
        alt=""
      />
      <BadgeGroup>
        <Badge>Breakfast</Badge>
        <Badge>Breakfast</Badge>
        <Badge>Breakfast</Badge>
        <Badge>Breakfast</Badge>
        <Badge>Breakfast</Badge>
        <Badge>Breakfast</Badge>
      </BadgeGroup>
      <RecipeDetailHeader>
        <h1>Toast Bread with Blueberry and Banana</h1>
        <span>
          by{" "}
          <Link href="/">
            <a>Chris William</a>
          </Link>
        </span>
      </RecipeDetailHeader>
      <RecipeIngredients />
      <RecipeInstructions />
    </RecipeDetailContainer>
  );
};

export default SingleRecipeDetail;
