import axios from "axios";
import RecipeCategories from "../../../components/RecipeCategories";

const RecipesPage = (props) => {
  return <RecipeCategories {...props} />;
};

export const getServerSideProps = async (ctx) => {
  const slugParams = ctx.params.slug;
  const res = await axios.get(`/api/recipes/categories/${slugParams}`);
  const { data, title, nextPage } = res.data;
  return { props: { recipes: data, title, nextPage } };
};

export default RecipesPage;
