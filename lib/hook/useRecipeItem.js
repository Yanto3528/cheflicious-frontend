import { useState } from "react";
import { v4 } from "uuid";

const onChangeArray = (setArray, e, index, errors) => {
  const { name, value } = e.target;
  if (value !== "") {
    errors[name] = false;
  }
  setArray((currentArray) =>
    produce(currentArray, (array) => {
      array[index].value = value;
    })
  );
};

const useRecipeItem = (initialState) => {
  const [state, setState] = useState(initialState || [{ id: v4(), value: "" }]);

  const onAdd = () => setState([...state, { id: v4(), value: "" }]);

  const onChange = (e, index) => {
    onChangeArray(setState, e, index);
  };

  const onRemove = (id) => {
    if (state.length > 1) {
      setState(state.filter((item) => item.id !== id));
    }
  };

  return [state, onAdd, onChange, onRemove];
};

export default useRecipeItem;
