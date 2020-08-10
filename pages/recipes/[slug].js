import axios from "axios";
import SingleRecipe from "../../components/SingleRecipe";

const SingleRecipePage = (props) => {
  return <SingleRecipe {...props} />;
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
