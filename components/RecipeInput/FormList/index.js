import { Add } from "../../Icons";
import { RecipeInputFormGroupContainer, AddButton } from "../styles";
import ErrorText from "../../../styles/shared/ErrorText";

const FormList = ({
  component: Component,
  values,
  title,
  name,
  errors,
  onChange,
  onRemove,
  onAdd,
}) => {
  return (
    <RecipeInputFormGroupContainer>
      <h3>{title}</h3>
      {values.map((value, index) => (
        <Component
          key={value._id}
          data={value}
          index={index}
          name={name}
          onChange={onChange}
          onRemove={onRemove}
          errors={errors}
        />
      ))}
      {errors && errors[name] && (
        <ErrorText>*Please enter at least 1 {name}</ErrorText>
      )}
      <AddButton onClick={onAdd} data-name={name}>
        <span data-name={name}>
          <Add />
        </span>
        <p data-name={name}>Add {title}</p>
      </AddButton>
    </RecipeInputFormGroupContainer>
  );
};

export default FormList;
