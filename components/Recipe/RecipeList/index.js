import RecipeCard from "../RecipeCard";

import { staggerVariants } from "../../../utils/variants";
import Grid from "../../../styles/shared/Grid";

const RecipeList = ({ title }) => {
  return (
    <section>
      <h1>{title}</h1>
      <Grid>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </Grid>
    </section>
  );
};

export default RecipeList;
