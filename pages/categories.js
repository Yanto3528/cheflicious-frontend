import axios from "axios";
import Categories from "../components/Categories";

const CategoriesPage = ({ categories }) => {
  return <Categories categories={categories} />;
};

export const getStaticProps = async () => {
  const res = await axios.get("/api/categories");
  return { props: { categories: res.data } };
};

export default CategoriesPage;
