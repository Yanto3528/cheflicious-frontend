import { useState } from "react";
import { produce } from "immer";
import { v4 } from "uuid";
import ClientOnlyPortal from "../ClientOnlyPortal";
import { Camera, Add, Close } from "../Icons";
import MultipleSelect from "../MultipleSelect";
import Ingredient from "./Ingredient";
import Instruction from "./Instruction";
import {
  AddRecipeContainer,
  AddRecipeForm,
  InputFileContainer,
  AddRecipeFormGroup,
  AddRecipeFormGroupContainer,
  AddRecipeInput,
  AddRecipeTextaera,
  AddButton,
  SubmitButton,
  CloseIcon,
  CameraUpload,
} from "./styles";
import ErrorText from "../../styles/shared/ErrorText";
import { addRecipeVariants } from "../../utils/variants";

let errors = {};

const onChangeArray = (setArray, e, index) => {
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

const AddRecipe = ({ titleText, toggle }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    servings: 1,
    cookingTime: 5,
  });
  const { title, description, servings, cookingTime } = formData;

  const [ingredients, setIngredients] = useState([{ id: v4(), value: "" }]);
  const [instructions, setInstructions] = useState([{ id: v4(), value: "" }]);
  const [categories, setCategories] = useState([]);

  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState(null);

  const addIngredient = () =>
    setIngredients([...ingredients, { id: v4(), value: "" }]);
  const addInstruction = () =>
    setInstructions([...instructions, { id: v4(), value: "" }]);
  const addCategories = (category) => {
    errors.category = false;
    setCategories([...categories, category]);
  };

  const onChangeIngredient = (e, index) => {
    onChangeArray(setIngredients, e, index);
  };
  const onChangeInstruction = (e, index) => {
    onChangeArray(setInstructions, e, index);
  };

  const onRemoveIngredient = (id) => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
    }
  };
  const onRemoveInstruction = (id) => {
    if (instructions.length > 1) {
      setInstructions(
        instructions.filter((instruction) => instruction.id !== id)
      );
    }
  };
  const onRemoveCategories = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value !== "") {
      errors[name] = false;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeImage = (e) => {
    if (e.target.files && e.target.files.length !== 0) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleRemoveImagePreview = (e) => {
    setImagePreview(null);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      errors.title = true;
    }
    if (description === "") {
      errors.description = true;
    }
    if (ingredients.length === 1 && ingredients[0].value === "") {
      errors.ingredient = true;
    }
    if (instructions.length === 1 && instructions[0].value === "") {
      errors.instruction = true;
    }
    if (categories.length === 0) {
      errors.category = true;
    }
    setFormData({ ...formData, ingredients, instructions, categories });
  };

  return (
    <ClientOnlyPortal selector="#modal-root">
      <AddRecipeContainer
        variants={addRecipeVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <CloseIcon top wide size="4rem" onClick={toggle}>
          <Close />
        </CloseIcon>
        <h2>{titleText}</h2>
        <AddRecipeForm onSubmit={onSubmit}>
          <InputFileContainer src={imagePreview}>
            <label htmlFor="file">
              <input
                type="file"
                name="file"
                id="file"
                onChange={handleChangeImage}
              />
              {!imagePreview && (
                <CameraUpload>
                  <Camera />
                </CameraUpload>
              )}
            </label>
            {imagePreview && (
              <CloseIcon
                top
                size="30px"
                color="black"
                onClick={handleRemoveImagePreview}
              >
                <Close />
              </CloseIcon>
            )}
          </InputFileContainer>
          <AddRecipeFormGroup>
            <label htmlFor="title">Title</label>
            <AddRecipeInput
              type="text"
              placeholder="Write a recipe title..."
              name="title"
              id="title"
              onChange={handleChange}
              value={title}
              error={errors && errors.title}
            />
            {errors && errors.title && (
              <ErrorText>*Title is required</ErrorText>
            )}
          </AddRecipeFormGroup>
          <AddRecipeFormGroup>
            <label htmlFor="description">Description</label>
            <AddRecipeTextaera
              rows="5"
              placeholder="Write a short description about your recipe..."
              name="description"
              id="description"
              onChange={handleChange}
              value={description}
              error={errors && errors.description}
            />
            {errors && errors.description && (
              <ErrorText>*Description is required</ErrorText>
            )}
          </AddRecipeFormGroup>
          <AddRecipeFormGroup>
            <label htmlFor="servings">Servings</label>
            <AddRecipeInput
              type="number"
              name="servings"
              id="servings"
              onChange={handleChange}
              value={servings}
              min={1}
            />
          </AddRecipeFormGroup>
          <AddRecipeFormGroup>
            <label htmlFor="cookingTime">Cooking Time</label>
            <AddRecipeInput
              type="number"
              name="cookingTime"
              id="cookingTime"
              onChange={handleChange}
              value={cookingTime}
              min={5}
              step={5}
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
              errors={errors}
            />
          </AddRecipeFormGroup>
          <AddRecipeFormGroupContainer>
            <h3>Ingredients</h3>
            {ingredients.map((ingredient, index) => (
              <Ingredient
                key={ingredient.id}
                ingredient={ingredient}
                index={index}
                onChange={onChangeIngredient}
                onRemove={onRemoveIngredient}
                errors={errors}
              />
            ))}
            {errors && errors.ingredient && (
              <ErrorText>*Please enter at least 1 ingredient</ErrorText>
            )}
            <AddButton onClick={addIngredient}>
              <span>
                <Add />
              </span>
              <p>Add Ingredients</p>
            </AddButton>
          </AddRecipeFormGroupContainer>
          <AddRecipeFormGroupContainer>
            <h3>Instructions</h3>
            {instructions.map((instruction, index) => (
              <Instruction
                key={instruction.id}
                instruction={instruction}
                index={index}
                onChange={onChangeInstruction}
                onRemove={onRemoveInstruction}
                errors={errors}
              />
            ))}
            {errors && errors.instruction && (
              <ErrorText>*Please enter at least 1 instruction</ErrorText>
            )}
            <AddButton onClick={addInstruction}>
              <span>
                <Add />
              </span>
              <p>Add Instruction</p>
            </AddButton>
          </AddRecipeFormGroupContainer>
          <SubmitButton type="submit">Submit</SubmitButton>
          {error && (
            <ErrorText fontSize="1.6rem" margin="10px" center>
              {error}
            </ErrorText>
          )}
        </AddRecipeForm>
      </AddRecipeContainer>
    </ClientOnlyPortal>
  );
};

export default AddRecipe;
