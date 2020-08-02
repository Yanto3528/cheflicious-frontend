import { Close } from "../../Icons";
import { StepFormGroup, AddRecipeTextaera, CloseIcon } from "../styles";

const Step = ({ step, index, onChange, onRemove }) => {
  const handleChange = (e) => onChange(e, index);
  const handleRemove = () => onRemove(step.id);
  return (
    <StepFormGroup>
      <p>{index + 1}</p>
      <AddRecipeTextaera
        rows="5"
        placeholder="Describe this step"
        name="step"
        id="step"
        onChange={handleChange}
        value={step.value}
      />
      <CloseIcon top onClick={handleRemove}>
        <Close />
      </CloseIcon>
    </StepFormGroup>
  );
};

export default Step;
