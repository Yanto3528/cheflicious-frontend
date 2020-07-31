import InfoDetail from "../../../styles/shared/InfoDetail";
import Difficulty from "../../../styles/shared/Difficulty";
import { Clock } from "../../Icons";

import {
  RecipeInstructionsContainer,
  RecipeInstructionsHeader,
  RecipeInstructionsStep,
} from "./styles";

const RecipeInstructions = () => {
  return (
    <RecipeInstructionsContainer>
      <RecipeInstructionsHeader>
        <h2>Instruction</h2>
        <div>
          <InfoDetail>
            <Difficulty /> Easy
          </InfoDetail>
          <InfoDetail>
            <Clock /> 30 min
          </InfoDetail>
        </div>
      </RecipeInstructionsHeader>
      <RecipeInstructionsStep>
        <span>1</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          expedita inventore repudiandae officia, corrupti fuga maxime quas
          numquam exercitationem autem.
        </p>
      </RecipeInstructionsStep>
      <RecipeInstructionsStep>
        <span>2</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          expedita inventore repudiandae officia, corrupti fuga maxime quas
          numquam exercitationem autem.
        </p>
      </RecipeInstructionsStep>
      <RecipeInstructionsStep>
        <span>3</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          expedita inventore repudiandae officia, corrupti fuga maxime quas
          numquam exercitationem autem.
        </p>
      </RecipeInstructionsStep>
    </RecipeInstructionsContainer>
  );
};

export default RecipeInstructions;
