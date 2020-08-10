import CloseIcon from "../../CloseIcon";
import { InstructionFormGroup } from "./styles";
import { Textarea } from "../../../styles/shared/Form";

const Instruction = ({ data, name, index, errors, onChange, onRemove }) => {
  const handleChange = (e) => onChange(e, index);
  const handleRemove = (e) => onRemove(e, data._id);
  return (
    <InstructionFormGroup>
      <p>{index + 1}</p>
      <Textarea
        rows="5"
        placeholder="Describe this step"
        name={name}
        id={name}
        onChange={handleChange}
        value={data.value}
        error={errors && errors.instruction}
      />
      <CloseIcon top onClick={handleRemove} name={name} />
    </InstructionFormGroup>
  );
};

export default Instruction;
