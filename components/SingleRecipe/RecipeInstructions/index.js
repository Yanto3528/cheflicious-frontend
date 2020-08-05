import InfoDetail from "../../../styles/shared/InfoDetail";
import Difficulty from "../../../styles/shared/Difficulty";
import { Clock } from "../../Icons";

import convertNumberToTime from "../../../utils/convertNumberToTime";

import {
  RecipeInstructionsHeader,
  RecipeInstructionsStepContainer,
  RecipeInstructionsStep,
} from "./styles";

const RecipeInstructions = ({ instructions, cookingTime, difficulty }) => {
  return (
    <main>
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
      <RecipeInstructionsStepContainer>
        {instructions.map((instruction, index) => (
          <RecipeInstructionsStep key={instruction._id}>
            <span>{index + 1}</span>
            <p>{instruction.value}</p>
          </RecipeInstructionsStep>
        ))}
      </RecipeInstructionsStepContainer>
    </main>
  );
};

export default RecipeInstructions;
