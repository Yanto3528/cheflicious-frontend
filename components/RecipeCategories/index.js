import RecipeList from "../Recipe/RecipeList";

const RecipeCategories = ({ recipes, title }) => {
  return (
    <main>
      <RecipeList title={title} recipes={recipes} />
    </main>
  );
};

export default RecipeCategories;
