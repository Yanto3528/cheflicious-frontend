import RecipeList from "../Recipe/RecipeList";

const Home = ({ recipes }) => {
  return (
    <main>
      <RecipeList title="Recent Recipes" recipes={recipes} />
    </main>
  );
};

export default Home;
