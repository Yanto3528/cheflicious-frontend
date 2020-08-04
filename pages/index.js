import axios from "axios";
import Head from "next/head";
import Home from "../components/Home";

const HomePage = ({ recipes }) => {
  return <Home recipes={recipes} />;
};

export const getServerSideProps = async () => {
  const res = await axios.get("/api/recipes");
  return { props: { recipes: res.data } };
};

export default HomePage;
