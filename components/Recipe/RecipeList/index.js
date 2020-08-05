import RecipeCard from "../RecipeCard";

import { RecipeListContainer } from "./styles";
import Grid from "../../../styles/shared/Grid";

const RecipeList = ({ title, recipes }) => {
  return (
    <RecipeListContainer>
      <h1>{title}</h1>
      {recipes.length === 0 && (
        <h2>
          Unfortunately, <span>{title}</span> does not have any recipe.
        </h2>
      )}
      <Grid>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </Grid>
    </RecipeListContainer>
  );
};

export default RecipeList;
