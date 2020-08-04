import RecipeCard from "../RecipeCard";

import { staggerVariants } from "../../../utils/variants";
import Grid from "../../../styles/shared/Grid";

const RecipeList = ({ title, recipes }) => {
  return (
    <section>
      <h1>{title}</h1>
      <Grid>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </Grid>
    </section>
  );
};

export default RecipeList;
