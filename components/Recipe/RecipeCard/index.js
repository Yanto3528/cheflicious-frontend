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

const RecipeCard = ({ isSidebar, recipe }) => {
  return (
    <RecipeCardContainer isSidebar={isSidebar}>
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
      {!isSidebar && (
        <React.Fragment>
          <BadgeGroup>
            {recipe.categories.map((category) => (
              <Badge key={category._id}>{category.value}</Badge>
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
  );
};

export default RecipeCard;
