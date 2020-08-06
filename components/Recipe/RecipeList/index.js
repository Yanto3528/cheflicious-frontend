import { useState, useCallback, useRef } from "react";
import RecipeCard from "../RecipeCard";
import useInfiniteScroll from "../../../lib/hook/useInfiniteScroll";
import Spinner from "../../Spinner";
import { RecipeListContainer } from "./styles";
import Grid from "../../../styles/shared/Grid";

const RecipeList = ({ title, recipes, url }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, loading, error, hasMore } = useInfiniteScroll(
    recipes,
    url,
    pageNumber
  );
  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  return (
    <RecipeListContainer>
      <h1>{title}</h1>
      {recipes.length === 0 && (
        <h2>
          Unfortunately, <span>{title}</span> does not have any recipe.
        </h2>
      )}
      <Grid>
        {data.map((recipe, index) => {
          if (data.length === index + 1) {
            return (
              <RecipeCard
                key={recipe._id}
                recipe={recipe}
                ref={lastElementRef}
              />
            );
          }
          return <RecipeCard key={recipe._id} recipe={recipe} />;
        })}
      </Grid>
      <div>
        {loading && <Spinner />}
        {error && <h3>Something went wrong when fetching data</h3>}
      </div>
    </RecipeListContainer>
  );
};

export default RecipeList;
