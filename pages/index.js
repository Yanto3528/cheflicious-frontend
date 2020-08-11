import axios from "axios";
import Head from "next/head";
import Home from "../components/Home";
import Page from "../components/Page";
import { authAPI } from "../lib/api";

const HomePage = ({ currentUser, ...props }) => {
  return (
    <Page currentUser={currentUser}>
      <Home {...props} />
    </Page>
  );
};

export const getServerSideProps = async (ctx) => {
  try {
    const res = await axios.get("/api/recipes");
    // const currentUser = await authAPI(ctx);
    return {
      props: {
        recipes: res.data.data,
        nextPage: res.data.nextPage,
        // currentUser,
      },
    };
  } catch (error) {
    return { props: { recipes: [], nextPage: false } };
  }
};

export default HomePage;
