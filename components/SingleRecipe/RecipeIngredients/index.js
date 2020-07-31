import InfoDetail from "../../../styles/shared/InfoDetail";
import { Servings } from "../../Icons";

import {
  RecipeIngredientsContainer,
  RecipeIngredientsHeader,
  RecipeIngredientList,
} from "./styles";

const RecipeIngredients = () => {
  return (
    <RecipeIngredientsContainer>
      <RecipeIngredientsHeader>
        <h2>Ingredients</h2>
        <InfoDetail>
          <Servings /> 5 people
        </InfoDetail>
      </RecipeIngredientsHeader>
      <RecipeIngredientList>
        <li>1 slice of bread</li>
        <li>1 slice of bread</li>
        <li>1 slice of bread</li>
        <li>1 slice of bread</li>
      </RecipeIngredientList>
    </RecipeIngredientsContainer>
  );
};

export default RecipeIngredients;
