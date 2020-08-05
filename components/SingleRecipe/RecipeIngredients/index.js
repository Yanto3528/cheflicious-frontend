import InfoDetail from "../../../styles/shared/InfoDetail";
import { Servings } from "../../Icons";

import {
  RecipeIngredientsContainer,
  RecipeIngredientsHeader,
  RecipeIngredientList,
} from "./styles";

const RecipeIngredients = ({ ingredients, servings }) => {
  return (
    <RecipeIngredientsContainer>
      <RecipeIngredientsHeader>
        <h2>Ingredients</h2>
        <InfoDetail>
          <Servings /> {servings} servings
        </InfoDetail>
      </RecipeIngredientsHeader>
      <RecipeIngredientList>
        {ingredients.map((ingredient) => (
          <li key={ingredient._id}>{ingredient.value}</li>
        ))}
      </RecipeIngredientList>
    </RecipeIngredientsContainer>
  );
};

export default RecipeIngredients;
