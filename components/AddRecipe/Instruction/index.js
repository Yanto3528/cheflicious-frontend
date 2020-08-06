import CloseIcon from "../../CloseIcon";
import { InstructionFormGroup } from "./styles";
import { Textarea } from "../../../styles/shared/Form";

const Instruction = ({ instruction, index, errors, onChange, onRemove }) => {
  const handleChange = (e) => onChange(e, index);
  const handleRemove = () => onRemove(instruction.id);
  return (
    <InstructionFormGroup>
      <p>{index + 1}</p>
      <Textarea
        rows="5"
        placeholder="Describe this step"
        name="instruction"
        id="instruction"
        onChange={handleChange}
        value={instruction.value}
        error={errors && errors.instruction}
      />
      <CloseIcon top onClick={handleRemove} />
    </InstructionFormGroup>
  );
};

export default Instruction;
