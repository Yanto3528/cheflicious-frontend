import { useState, useEffect } from "react";
import { produce } from "immer";
import { v4 } from "uuid";
import axios from "axios";

// Hook and Contexts
import { useAlert } from "../../context/AlertContext";
import useImage from "../../lib/hook/useImage";

// Components
import Select from "../Select";
import Ingredient from "./Ingredient";
import Instruction from "./Instruction";
import CloseIcon from "../CloseIcon";
import Button from "../Button";
import InputFile from "./InputFile";
import FormList from "./FormList";

// Data
import { difficultyData } from "./constant";
import { addRecipeVariants } from "../../utils/variants";

// Styles
import { AddRecipeContainer } from "./styles";
import ErrorText from "../../styles/shared/ErrorText";
import { Form, Input, Textarea, FormGroup } from "../../styles/shared/Form";

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
    difficulty: "easy",
  });
  const { title, description, servings, cookingTime, difficulty } = formData;

  const [ingredients, setIngredients] = useState([{ id: v4(), value: "" }]);
  const [instructions, setInstructions] = useState([{ id: v4(), value: "" }]);
  const [categories, setCategories] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [difficultyOptions] = useState(difficultyData);
  const [loading, setLoading] = useState(false);

  const {
    imagePreview,
    handleChangeImage,
    handleImageUpload,
    handleRemoveImagePreview,
  } = useImage();

  const { setAlert } = useAlert();

  useEffect(() => {
    const fetchCategoryOptions = async () => {
      const res = await axios.get("/api/categories");
      setCategoryOptions(res.data);
    };
    fetchCategoryOptions();
  }, []);

  const addIngredient = () =>
    setIngredients([...ingredients, { id: v4(), value: "" }]);
  const addInstruction = () =>
    setInstructions([...instructions, { id: v4(), value: "" }]);
  const addCategories = (category) => {
    errors.categories = false;
    setCategories([...categories, category]);
    setCategoryOptions(
      categoryOptions.filter((option) => option._id !== category._id)
    );
  };

  const onSelectDifficulty = (selectedOption) => {
    errors.difficulty = false;
    setFormData({ ...formData, difficulty: selectedOption });
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
  const onRemoveCategories = (data) => {
    setCategories(categories.filter((category) => category._id !== data._id));
    setCategoryOptions(
      [...categoryOptions, data].sort(function (a, b) {
        if (a.value < b.value) {
          return -1;
        }
        if (a.value > b.value) {
          return 1;
        }
        return 0;
      })
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value !== "") {
      errors[name] = false;
    }
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
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
      errors.categories = true;
    }
    try {
      // const image = await handleImageUpload(file);
      const data = {
        ...formData,
        // image,
        ingredients,
        instructions,
        categories,
      };
      setLoading(true);
      const res = await axios.post("/api/recipes", data);
      setAlert(res.data.message);
    } catch (error) {
      setAlert(error.response.data.error, "danger");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AddRecipeContainer
      variants={addRecipeVariants}
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
          {errors && errors.title && <ErrorText>*Title is required</ErrorText>}
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
          onChange={onChangeIngredient}
          onRemove={onRemoveIngredient}
          onAdd={addIngredient}
          errors={errors}
        />
        <FormList
          component={Instruction}
          title="Instructions"
          values={instructions}
          onChange={onChangeInstruction}
          onRemove={onRemoveInstruction}
          onAdd={addInstruction}
          errors={errors}
        />
        <Button type="submit" loading={loading}>
          Submit
        </Button>
      </Form>
    </AddRecipeContainer>
  );
};

export default AddRecipe;
