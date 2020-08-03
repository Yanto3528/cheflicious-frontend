import useSWR from "swr";
import { Category } from "./styles";
import Grid from "../../styles/shared/Grid";

const Categories = ({ categories }) => {
  return (
    <div>
      <h1 style={{ fontSize: "2.4rem" }}>Categories</h1>
      <Grid>
        {categories.map((category) => (
          <Category>
            <img src={category.image} alt={category.value} />
            <h2>{category.value}</h2>
          </Category>
        ))}
      </Grid>
    </div>
  );
};

export default Categories;
