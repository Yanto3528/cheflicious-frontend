import Head from "next/head";
import axios from "axios";
import SingleRecipe from "../../components/SingleRecipe";

const SingleRecipePage = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title> {props.recipe.title} | Cheflicious</title>
        <meta
          name="description"
          content={props.recipe.description.substring(0, 160)}
        />
      </Head>
      <SingleRecipe {...props} />
    </React.Fragment>
  );
};

export const getServerSideProps = async (ctx) => {
  const { slug } = ctx.params;
  const res = await axios.get(`/api/recipes/${slug}`);
  const { recipe, relatedRecipes } = res.data;
  return {
    props: { recipe, relatedRecipes },
  };
};

export default SingleRecipePage;
