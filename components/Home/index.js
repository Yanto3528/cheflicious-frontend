import RecipeList from "../Recipe/RecipeList";

import Container from "../../styles/shared/Container";

const Home = () => {
  return (
    <Container>
      <main>
        <RecipeList title="Recent Recipes" />
      </main>
    </Container>
  );
};

export default Home;
