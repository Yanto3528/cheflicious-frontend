import { Close } from "../../Icons";
import { InstructionFormGroup, AddRecipeTextaera, CloseIcon } from "../styles";

const Instruction = ({ instruction, index, errors, onChange, onRemove }) => {
  const handleChange = (e) => onChange(e, index);
  const handleRemove = () => onRemove(instruction.id);
  return (
    <InstructionFormGroup>
      <p>{index + 1}</p>
      <AddRecipeTextaera
        rows="5"
        placeholder="Describe this step"
        name="instruction"
        id="instruction"
        onChange={handleChange}
        value={instruction.value}
        error={errors && errors.instruction}
      />
      <CloseIcon top onClick={handleRemove}>
        <Close />
      </CloseIcon>
    </InstructionFormGroup>
  );
};

export default Instruction;
