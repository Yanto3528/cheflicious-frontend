import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import RecipeCard from "../RecipeCard";
import useInfiniteScroll from "../../../lib/hook/useInfiniteScroll";
import Spinner from "../../Spinner";
import { RecipeListContainer } from "./styles";
import Grid from "../../../styles/shared/Grid";
import { LoadingMoreContainer } from "../../../styles/shared/LoadingIcon";

const RecipeList = ({ title, recipes, url, nextPage }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [ref, inView] = useInView();
  const { data, loading, error, hasMore } = useInfiniteScroll(
    recipes,
    url,
    pageNumber,
    nextPage
  );
  useEffect(() => {
    setPageNumber(1);
  }, [url]);
  useEffect(() => {
    if (inView && hasMore) {
      setPageNumber((prevPage) => prevPage + 1);
    }
  }, [ref, inView, hasMore, nextPage]);

  return (
    <RecipeListContainer>
      <h1>{title}</h1>
      {recipes.length === 0 && (
        <h3>
          Unfortunately, <span>{title}</span> does not have any recipe.
        </h3>
      )}
      <Grid>
        {data.map((recipe, index) => {
          if (data.length === index + 1) {
            return <RecipeCard key={recipe._id} recipe={recipe} ref={ref} />;
          }
          return <RecipeCard key={recipe._id} recipe={recipe} />;
        })}
      </Grid>
      <LoadingMoreContainer>
        {loading && <Spinner />}
        {error && <h3>Something went wrong when fetching data</h3>}
      </LoadingMoreContainer>
    </RecipeListContainer>
  );
};

export default RecipeList;
