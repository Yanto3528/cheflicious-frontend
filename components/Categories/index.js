import { useRouter } from "next/router";
import { Category } from "./styles";
import Grid from "../../styles/shared/Grid";

const Categories = ({ categories }) => {
  const router = useRouter();
  return (
    <div>
      <h1 style={{ fontSize: "2.4rem" }}>Categories</h1>
      <Grid>
        {categories.map((category) => (
          <Category
            key={category._id}
            onClick={() =>
              router.push(
                "/recipes/categories/[slug]",
                `/recipes/categories/${category.slug}`
              )
            }
          >
            <img src={category.image} alt={category.value} />
            <h2>{category.value}</h2>
          </Category>
        ))}
      </Grid>
    </div>
  );
};

export default Categories;
