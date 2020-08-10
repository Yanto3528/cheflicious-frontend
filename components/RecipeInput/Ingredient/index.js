import CloseIcon from "../../CloseIcon";
import { FormGroup, Input } from "../../../styles/shared/Form";

const Ingredient = ({ data, name, index, errors, onChange, onRemove }) => {
  const handleChange = (e) => onChange(e, index);
  const handleRemove = (e) => onRemove(e, data._id);

  return (
    <FormGroup key={data.id}>
      <Input
        type="text"
        placeholder="Ingredient..."
        name={name}
        id={name}
        value={data.value}
        onChange={handleChange}
        error={errors && errors.ingredient}
      />
      <CloseIcon onClick={handleRemove} name={name} />
    </FormGroup>
  );
};

export default Ingredient;
