import { useState } from "react";
import { produce } from "immer";
import { v4 } from "uuid";
import ClientOnlyPortal from "../ClientOnlyPortal";
import { Camera, Close, Add } from "../Icons";
import MultipleSelect from "../MultipleSelect";
import Ingredient from "./Ingredient";
import Step from "./Step";
import {
  AddRecipeContainer,
  AddRecipeForm,
  InputFileContainer,
  AddRecipeFormGroup,
  AddRecipeFormGroupContainer,
  AddRecipeInput,
  AddRecipeTextaera,
  AddButton,
  CloseIcon,
  StepFormGroup,
  SubmitButton,
} from "./styles";

const onChange = (setArray, value, index) => {
  setArray((currentArray) =>
    produce(currentArray, (array) => {
      array[index].value = value;
    })
  );
};

const AddRecipe = ({ title }) => {
  const [ingredients, setIngredients] = useState([{ id: v4(), value: "" }]);
  const [steps, setSteps] = useState([{ id: v4(), value: "" }]);
  const [categories, setCategories] = useState([]);

  const addIngredient = () =>
    setIngredients([...ingredients, { id: v4(), value: "" }]);
  const addStep = () => setSteps([...steps, { id: v4(), value: "" }]);
  const addCategories = (category) => {
    setCategories([...categories, category]);
  };

  const onChangeIngredient = (e, index) => {
    onChange(setIngredients, e.target.value, index);
  };
  const onChangeStep = (e, index) => {
    onChange(setSteps, e.target.value, index);
  };

  const onRemoveIngredient = (id) => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
    }
  };
  const onRemoveStep = (id) => {
    if (steps.length > 1) {
      setSteps(steps.filter((step) => step.id !== id));
    }
  };
  const onRemoveCategories = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <ClientOnlyPortal selector="#modal-root">
      <AddRecipeContainer>
        <h2>{title}</h2>
        <AddRecipeForm>
          <InputFileContainer>
            <label htmlFor="file">
              <input type="file" name="file" id="file" />
              <span>
                <Camera />
              </span>
            </label>
          </InputFileContainer>
          <AddRecipeFormGroup>
            <label htmlFor="title">Title</label>
            <AddRecipeInput
              type="text"
              placeholder="Write a recipe title..."
              name="title"
              id="title"
            />
          </AddRecipeFormGroup>
          <AddRecipeFormGroup>
            <label htmlFor="description">Description</label>
            <AddRecipeTextaera
              rows="5"
              placeholder="Write a short description about your recipe..."
              name="description"
              id="description"
            />
          </AddRecipeFormGroup>
          <AddRecipeFormGroup>
            <label htmlFor="servings">Servings</label>
            <AddRecipeInput
              type="number"
              defaultValue={1}
              min={0}
              name="servings"
              id="servings"
            />
          </AddRecipeFormGroup>
          <AddRecipeFormGroup>
            <label htmlFor="cookingTime">Cooking Time</label>
            <AddRecipeInput
              type="number"
              defaultValue={5}
              step={5}
              min={5}
              name="cookingTime"
              id="cookingTime"
            />{" "}
            min
          </AddRecipeFormGroup>
          <AddRecipeFormGroup>
            <label htmlFor="categories">Categories</label>
            <MultipleSelect
              placeholder="Choose Category"
              categories={categories}
              onAdd={addCategories}
              onRemove={onRemoveCategories}
            />
          </AddRecipeFormGroup>
          <AddRecipeFormGroupContainer>
            <h3>Ingredients</h3>
            {ingredients.map((ingredient, index) => (
              <Ingredient
                key={ingredient}
                ingredient={ingredient}
                index={index}
                onChange={onChangeIngredient}
                onRemove={onRemoveIngredient}
              />
            ))}
            <AddButton onClick={addIngredient}>
              <span>
                <Add />
              </span>
              <p>Add Ingredients</p>
            </AddButton>
          </AddRecipeFormGroupContainer>
          <AddRecipeFormGroupContainer>
            <h3>Steps</h3>
            {steps.map((step, index) => (
              <Step
                key={step.id}
                step={step}
                index={index}
                onChange={onChangeStep}
                onRemove={onRemoveStep}
              />
            ))}
            <AddButton onClick={addStep}>
              <span>
                <Add />
              </span>
              <p>Add Step</p>
            </AddButton>
          </AddRecipeFormGroupContainer>
          <SubmitButton>Submit</SubmitButton>
        </AddRecipeForm>
      </AddRecipeContainer>
    </ClientOnlyPortal>
  );
};

export default AddRecipe;
