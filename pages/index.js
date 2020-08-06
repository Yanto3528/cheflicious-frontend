import axios from "axios";
import Head from "next/head";
import Home from "../components/Home";

const HomePage = (props) => {
  return <Home {...props} />;
};

export const getServerSideProps = async () => {
  const res = await axios.get("/api/recipes");
  return { props: { recipes: res.data.data, nextPage: res.data.nextPage } };
};

export default HomePage;
