import { useRouter } from "next/router";
import RecipeList from "../Recipe/RecipeList";

const Search = (props) => {
  const router = useRouter();
  return (
    <main>
      <RecipeList
        {...props}
        title={`Search results for ${router.query.query}`}
        url={`/api/recipes?search=${router.query.query}`}
      />
    </main>
  );
};

export default Search;
