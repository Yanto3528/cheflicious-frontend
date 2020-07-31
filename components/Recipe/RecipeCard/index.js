import { Clock, Servings, Heart, Chat } from "../../Icons";

import {
  RecipeCardContainer,
  RecipeCardDetail,
  RecipeCardSocial,
} from "./styles";
import Badge, { BadgeGroup } from "../../../styles/shared/Badge";
import InfoDetail from "../../../styles/shared/InfoDetail";
import Difficulty from "../../../styles/shared/Difficulty";

const RecipeCard = () => {
  return (
    <RecipeCardContainer>
      <img
        src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        alt=""
      />
      <h2>Toast Bread with Blueberry and Banana</h2>
      <RecipeCardDetail>
        <InfoDetail>
          <Clock /> 30 mins
        </InfoDetail>
        <InfoDetail>
          <Servings /> 5 People
        </InfoDetail>
        <InfoDetail>
          <Difficulty /> Easy
        </InfoDetail>
      </RecipeCardDetail>
      <BadgeGroup>
        <Badge>Breakfast</Badge>
        <Badge>Breakfast</Badge>
        <Badge>Breakfast</Badge>
        <Badge>Breakfast</Badge>
        <Badge>Breakfast</Badge>
        <Badge>Breakfast</Badge>
      </BadgeGroup>
      <RecipeCardSocial>
        <span>
          <Heart /> 1k people like this
        </span>
        <span>
          <Chat /> 20 comments
        </span>
      </RecipeCardSocial>
    </RecipeCardContainer>
  );
};

export default RecipeCard;
