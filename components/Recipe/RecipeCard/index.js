import Link from "next/link";
import { useRouter } from "next/router";
import { Clock, Servings, HeartOutline, CommentOutline } from "../../Icons";
import convertNumberToTime from "../../../utils/convertNumberToTime";
import {
  RecipeCardContainer,
  RecipeCardDetail,
  RecipeCardSocial,
} from "./styles";
import Badge, { BadgeGroup } from "../../../styles/shared/Badge";
import InfoDetail from "../../../styles/shared/InfoDetail";
import Difficulty from "../../../styles/shared/Difficulty";

const RecipeCard = ({ small, recipe }) => {
  const router = useRouter();

  const handleChangeSingleRecipeRoute = () => {
    router.push("/recipes/[slug]", `/recipes/${recipe.slug}`);
  };

  return (
    <Link href="/recipes/[slug]" as={`/recipes/${recipe.slug}`}>
      <RecipeCardContainer
        small={small}
        // onClick={handleChangeSingleRecipeRoute}
        whileHover={{ y: -5 }}
      >
        <img src={recipe.image} alt={recipe.title} />
        <h2>{recipe.title}</h2>
        <RecipeCardDetail>
          <InfoDetail>
            <Clock /> {convertNumberToTime(recipe.cookingTime)}
          </InfoDetail>
          <InfoDetail>
            <Servings /> {`${recipe.servings} servings`}
          </InfoDetail>
          <InfoDetail>
            <Difficulty type={recipe.difficulty} /> {recipe.difficulty}
          </InfoDetail>
        </RecipeCardDetail>
        {!small && (
          <React.Fragment>
            <BadgeGroup onClick={(e) => e.stopPropagation()}>
              {recipe.categories.map((category) => (
                <Link
                  href="/recipes/categories/[slug]"
                  as={`/recipes/categories/${category.slug}`}
                  key={category._id}
                >
                  <Badge>{category.value}</Badge>
                </Link>
              ))}
            </BadgeGroup>
            <RecipeCardSocial>
              <span>
                <HeartOutline /> {recipe.likes.length} likes
              </span>
              <span>
                <CommentOutline /> {recipe.comments.length} comments
              </span>
            </RecipeCardSocial>
          </React.Fragment>
        )}
      </RecipeCardContainer>
    </Link>
  );
};

export default RecipeCard;
