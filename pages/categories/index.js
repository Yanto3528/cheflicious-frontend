import Head from "next/head";
import axios from "axios";
import Categories from "../../components/Categories";

const CategoriesPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head>
        <title> Categories | Cheflicious</title>
        <meta
          name="description"
          content="Looking for recipes with specific categories? Look no more! We have every categories available for you to search for."
        />
      </Head>
      <Categories {...props} />
    </React.Fragment>
  );
};

export const getStaticProps = async (ctx) => {
  const res = await axios.get("/api/categories");
  return { props: { categories: res.data } };
};

export default CategoriesPage;
