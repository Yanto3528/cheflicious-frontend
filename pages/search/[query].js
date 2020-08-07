import axios from "axios";
import Search from "../../components/Search";

const SearchPage = (props) => {
  return <Search {...props} />;
};

export const getServerSideProps = async (ctx) => {
  const { query } = ctx.params;
  try {
    const res = await axios.get(`/api/recipes?search=${query}`);
    console.log(res.data);
    const { data, nextPage } = res.data;
    return { props: { recipes: data, nextPage } };
  } catch (error) {
    return { props: { recipes: [], nextPage: false } };
  }
};

export default SearchPage;
