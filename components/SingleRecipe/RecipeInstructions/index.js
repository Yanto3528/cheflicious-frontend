import InfoDetail from "../../../styles/shared/InfoDetail";
import Difficulty from "../../../styles/shared/Difficulty";
import { Clock } from "../../Icons";

import convertNumberToTime from "../../../utils/convertNumberToTime";

import {
  RecipeInstructionsContainer,
  RecipeInstructionsHeader,
  RecipeInstructionsStep,
} from "./styles";

const RecipeInstructions = ({ instructions, cookingTime, difficulty }) => {
  return (
    <RecipeInstructionsContainer>
      <RecipeInstructionsHeader>
        <h2>Instructions</h2>
        <div>
          <InfoDetail>
            <Difficulty type={difficulty} /> {difficulty}
          </InfoDetail>
          <InfoDetail>
            <Clock /> {convertNumberToTime(cookingTime)}
          </InfoDetail>
        </div>
      </RecipeInstructionsHeader>
      {instructions.map((instruction, index) => (
        <RecipeInstructionsStep key={instruction._id}>
          <span>{index + 1}</span>
          <p>{instruction.value}</p>
        </RecipeInstructionsStep>
      ))}
    </RecipeInstructionsContainer>
  );
};

export default RecipeInstructions;
