import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Servings, HeartOutline, CommentOutline } from "../../Icons";
import convertNumberToTime from "../../../utils/convertNumberToTime";
import {
  RecipeCardContainer,
  RecipeCardImageContainer,
  RecipeCardDetail,
  RecipeCardSocial,
} from "./styles";
import Badge, { BadgeGroup } from "../../../styles/shared/Badge";
import InfoDetail from "../../../styles/shared/InfoDetail";
import Difficulty from "../../../styles/shared/Difficulty";

const RecipeCard = React.forwardRef(({ small, recipe }, ref) => {
  return (
    <Link href="/recipes/[slug]" as={`/recipes/${recipe.slug}`}>
      <RecipeCardContainer small={small} ref={ref && ref}>
        <RecipeCardImageContainer>
          <motion.img src={recipe.image} alt={recipe.title} />
        </RecipeCardImageContainer>
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
                <CommentOutline />{" "}
                {recipe.comments ? recipe.comments.length : "0"} comments
              </span>
            </RecipeCardSocial>
          </React.Fragment>
        )}
      </RecipeCardContainer>
    </Link>
  );
});

export default RecipeCard;
