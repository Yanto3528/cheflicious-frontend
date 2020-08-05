import axios from "axios";
import RecipeCategories from "../../../components/RecipeCategories";

const RecipesPage = ({ recipes, slug, title }) => {
  return <RecipeCategories recipes={recipes} title={title} />;
};

export const getServerSideProps = async (ctx) => {
  const slugParams = ctx.params.slug;
  const res = await axios.get(`/api/recipes/categories/${slugParams}`);
  const { recipes, value, slug } = res.data;
  return { props: { recipes, slug, title: value } };
};

export default RecipesPage;
