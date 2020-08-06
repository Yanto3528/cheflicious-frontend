import CloseIcon from "../../CloseIcon";
import { FormGroup, Input } from "../../../styles/shared/Form";

const Ingredient = ({ ingredient, index, errors, onChange, onRemove }) => {
  const handleChange = (e) => onChange(e, index);
  const handleRemove = (e) => onRemove(ingredient.id);

  return (
    <FormGroup key={ingredient.id}>
      <Input
        type="text"
        placeholder="Ingredient..."
        name="ingredient"
        id="ingredient"
        value={ingredient.value}
        onChange={handleChange}
        error={errors && errors.ingredient}
      />
      <CloseIcon onClick={handleRemove} />
    </FormGroup>
  );
};

export default Ingredient;
