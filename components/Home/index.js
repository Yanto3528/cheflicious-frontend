import RecipeList from "../Recipe/RecipeList";

const Home = (props) => {
  return (
    <main>
      <RecipeList title="Recent Recipes" url={`/api/recipes`} {...props} />
    </main>
  );
};

export default Home;
