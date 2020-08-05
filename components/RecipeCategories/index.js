import { useRouter } from "next/router";
import RecipeList from "../Recipe/RecipeList";
import BackLink from "../../styles/shared/BackLink";

const RecipeCategories = ({ recipes, title, slug }) => {
  const router = useRouter();
  return (
    <main>
      <BackLink onClick={() => router.back()}>&larr; Go back</BackLink>
      <RecipeList
        title={title}
        recipes={recipes}
        url={`/api/recipes/categories/${slug}`}
      />
    </main>
  );
};

export default RecipeCategories;
