import { useState, useEffect } from "react";
import axios from "axios";

// Hook and Contexts
import useRecipe from "../../lib/hook/useRecipe";
import useImage from "../../lib/hook/useImage";

// Components
import Select from "../Select";
import Ingredient from "./Ingredient";
import Instruction from "./Instruction";
import CloseIcon from "../CloseIcon";
import Button from "../Button";
import InputFile from "./InputFile";
import FormList from "./FormList";
import ClientOnlyPortal from "../ClientOnlyPortal";

// Data
import { difficultyData } from "./constant";
import { recipeInputVariants } from "../../utils/variants";

// Styles
import { RecipeInputContainer } from "./styles";
import ErrorText from "../../styles/shared/ErrorText";
import { Form, Input, Textarea, FormGroup } from "../../styles/shared/Form";

const RecipeInput = ({ titleText, toggle, isEdit, recipe }) => {
  const {
    data,
    errors,
    loading,
    imagePreview,
    handleChangeImage,
    handleRemoveImagePreview,
    addItems,
    onChangeItems,
    onRemoveItems,
    addCategories,
    onRemoveCategories,
    onSelectDifficulty,
    handleChange,
    onSubmit,
  } = useRecipe(recipe, toggle, isEdit);

  const {
    title,
    description,
    servings,
    cookingTime,
    difficulty,
    ingredients,
    instructions,
    categories,
  } = data;

  const [categoryOptions, setCategoryOptions] = useState([]);
  const [difficultyOptions] = useState(difficultyData);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchCategoryOptions = async () => {
      const res = await axios.get("/api/categories");
      setCategoryOptions(res.data);
    };
    fetchCategoryOptions();
  }, []);

  return (
    <ClientOnlyPortal selector="#modal-root">
      <RecipeInputContainer
        variants={recipeInputVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <CloseIcon top wide size="4rem" onClick={toggle} />
        <h2>{titleText}</h2>
        <Form onSubmit={onSubmit}>
          <InputFile
            imagePreview={imagePreview}
            onChange={handleChangeImage}
            onRemove={handleRemoveImagePreview}
          />
          <FormGroup>
            <label htmlFor="title">Title</label>
            <Input
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
          </FormGroup>
          <FormGroup>
            <label htmlFor="description">Description</label>
            <Textarea
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
          </FormGroup>
          <FormGroup>
            <label htmlFor="servings">Servings</label>
            <Input
              type="number"
              name="servings"
              id="servings"
              onChange={handleChange}
              value={servings}
              min={1}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="cookingTime">Cooking Time</label>
            <Input
              type="number"
              name="cookingTime"
              id="cookingTime"
              onChange={handleChange}
              value={cookingTime}
              min={5}
              step={5}
            />{" "}
            min
          </FormGroup>
          <FormGroup>
            <label htmlFor="difficulty">Difficulty</label>
            <Select
              placeholder="Choose Difficulty"
              values={difficulty}
              options={difficultyOptions}
              name="difficulty"
              onSelect={onSelectDifficulty}
              errors={errors}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="categories">Categories</label>
            <Select
              placeholder="Choose Category"
              isMulti
              values={categories}
              options={categoryOptions}
              name="categories"
              onAdd={addCategories}
              onRemove={onRemoveCategories}
              errors={errors}
            />
          </FormGroup>
          <FormList
            component={Ingredient}
            title="Ingredients"
            values={ingredients}
            name="ingredients"
            onChange={onChangeItems}
            onRemove={onRemoveItems}
            onAdd={addItems}
            errors={errors}
          />
          <FormList
            component={Instruction}
            title="Instructions"
            values={instructions}
            name="instructions"
            onChange={onChangeItems}
            onRemove={onRemoveItems}
            onAdd={addItems}
            errors={errors}
          />
          <Button type="submit" loading={loading}>
            Submit
          </Button>
        </Form>
      </RecipeInputContainer>
    </ClientOnlyPortal>
  );
};

export default RecipeInput;
