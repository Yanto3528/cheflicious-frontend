import Head from "next/head";
import axios from "axios";
import RecipeCategories from "../../../components/RecipeCategories";

const RecipesPage = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title> {props.title} | Cheflicious</title>
        <meta
          name="description"
          content={`Recipes for ${props.title.toLowerCase()}`}
        />
      </Head>
      <RecipeCategories {...props} />
    </React.Fragment>
  );
};

export const getServerSideProps = async (ctx) => {
  const slugParams = ctx.params.slug;
  const res = await axios.get(`/api/recipes/categories/${slugParams}`);
  const { data, title, nextPage } = res.data;
  return { props: { recipes: data, title, nextPage } };
};

export default RecipesPage;
