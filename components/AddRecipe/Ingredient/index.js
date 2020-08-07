import CloseIcon from "../../CloseIcon";
import { FormGroup, Input } from "../../../styles/shared/Form";

const Ingredient = ({ data, index, errors, onChange, onRemove }) => {
  const handleChange = (e) => onChange(e, index);
  const handleRemove = (e) => onRemove(data.id);

  return (
    <FormGroup key={data.id}>
      <Input
        type="text"
        placeholder="Ingredient..."
        name="ingredient"
        id="ingredient"
        value={data.value}
        onChange={handleChange}
        error={errors && errors.ingredient}
      />
      <CloseIcon onClick={handleRemove} />
    </FormGroup>
  );
};

export default Ingredient;
