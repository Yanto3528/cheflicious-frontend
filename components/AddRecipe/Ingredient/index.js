import { Close } from "../../Icons";
import { AddRecipeFormGroup, AddRecipeInput, CloseIcon } from "../styles";

const Ingredient = ({ ingredient, index, onChange, onRemove }) => {
  const handleChange = (e) => onChange(e, index);
  const handleRemove = (e) => onRemove(ingredient.id);

  return (
    <AddRecipeFormGroup key={ingredient.id}>
      <AddRecipeInput
        type="text"
        placeholder="Ingredient..."
        name="ingredient"
        id="ingredient"
        value={ingredient.value}
        onChange={handleChange}
      />
      <CloseIcon onClick={handleRemove}>
        <Close />
      </CloseIcon>
    </AddRecipeFormGroup>
  );
};

export default Ingredient;
