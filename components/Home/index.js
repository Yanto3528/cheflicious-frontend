import RecipeList from "../Recipe/RecipeList";

const Home = ({ recipes }) => {
  return (
    <main>
      <RecipeList
        title="Recent Recipes"
        recipes={recipes}
        url={`/api/recipes`}
      />
    </main>
  );
};

export default Home;
