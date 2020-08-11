import axios from "axios";
import Categories from "../../components/Categories";

const CategoriesPage = ({ ...props }) => {
  return <Categories {...props} />;
};

export const getStaticProps = async (ctx) => {
  const res = await axios.get("/api/categories");
  return { props: { categories: res.data } };
};

export default CategoriesPage;
