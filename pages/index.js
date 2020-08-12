import axios from "axios";
import Head from "next/head";
import Home from "../components/Home";

const HomePage = ({ currentUser, ...props }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Sharing Recipes around the world | Cheflicious</title>
        <meta
          name="description"
          content="Looking for some delicious recipe for your next cooking? People are sharing their most delicious recipe with others around the world. Join now"
        />
      </Head>
      <Home {...props} />
    </React.Fragment>
  );
};

export const getServerSideProps = async (ctx) => {
  try {
    const res = await axios.get("/api/recipes");
    return {
      props: {
        recipes: res.data.data,
        nextPage: res.data.nextPage,
      },
    };
  } catch (error) {
    return { props: { recipes: [], nextPage: false } };
  }
};

export default HomePage;
