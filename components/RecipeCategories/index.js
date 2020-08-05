import { useRouter } from "next/router";
import RecipeList from "../Recipe/RecipeList";
import BackLink from "../../styles/shared/BackLink";

const RecipeCategories = ({ recipes, title }) => {
  const router = useRouter();
  // TODO add infinite scroll
  return (
    <main>
      <BackLink onClick={() => router.back()}>&larr; Go back</BackLink>
      <RecipeList title={title} recipes={recipes} />
    </main>
  );
};

export default RecipeCategories;
