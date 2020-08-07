import { Add } from "../../Icons";
import { AddRecipeFormGroupContainer, AddButton } from "../styles";
import ErrorText from "../../../styles/shared/ErrorText";

const IngredientList = ({
  component: Component,
  values,
  title,
  errors,
  onChange,
  onRemove,
  onAdd,
}) => {
  return (
    <AddRecipeFormGroupContainer>
      <h3>{title}</h3>
      {values.map((value, index) => (
        <Component
          key={value.id}
          data={value}
          index={index}
          onChange={onChange}
          onRemove={onRemove}
          errors={errors}
        />
      ))}
      {errors && errors[name] && (
        <ErrorText>*Please enter at least 1 {title.toLowerCase()}</ErrorText>
      )}
      <AddButton onClick={onAdd}>
        <span>
          <Add />
        </span>
        <p>Add {title}</p>
      </AddButton>
    </AddRecipeFormGroupContainer>
  );
};

export default IngredientList;
