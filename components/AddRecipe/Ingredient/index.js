import { Close } from "../../Icons";
import { AddRecipeFormGroup, AddRecipeInput, CloseIcon } from "../styles";

const Ingredient = ({ ingredient, index, errors, onChange, onRemove }) => {
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
        error={errors && errors.ingredient}
      />
      <CloseIcon onClick={handleRemove}>
        <Close />
      </CloseIcon>
    </AddRecipeFormGroup>
  );
};

export default Ingredient;
