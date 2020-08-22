import { useState } from "react";
import { v4 } from "uuid";
import axios from "axios";
import produce from "immer";
import { useRouter } from "next/router";
import { useAlertContext } from "../../context/AlertContext";
import useImage from "./useImage";

const getInitialData = (recipe) => {
  let initialData;
  if (recipe) {
    initialData = {
      title: recipe.title,
      description: recipe.description,
      servings: recipe.servings,
      cookingTime: recipe.cookingTime,
      difficulty: recipe.difficulty,
      categories: recipe.categories,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
    };
  } else {
    initialData = {
      title: "",
      description: "",
      servings: 1,
      cookingTime: 5,
      difficulty: "easy",
      categories: [],
      ingredients: [{ _id: v4(), value: "" }],
      instructions: [{ _id: v4(), value: "" }],
    };
  }
  return initialData;
};

const onChangeArray = (data, setData, error, setErrors, e, index) => {
  const { name, value } = e.target;
  if (value !== "") {
    setErrors({ ...error, [name]: false });
  }
  setData({
    ...data,
    [name]: produce(data[name], (array) => {
      array[index].value = value;
    }),
  });
};

const validateError = (obj, errorsObj, setErrors) => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "string" && obj[key] === "") {
      errorsObj[key] = true;
    } else if (typeof obj[key] === "object") {
      if (key === "categories" && obj[key].length === 0) {
        errorsObj[key] = true;
      }
      if (obj[key].length === 1 && obj[key][0].value === "") {
        errorsObj[key] = true;
      }
    }
  });
  setErrors(errorsObj);
};

const useRecipe = (recipe, toggle, isEdit) => {
  const [data, setData] = useState(getInitialData(recipe));
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const {
    imagePreview,
    handleChangeImage,
    handleImageUpload,
    handleRemoveImagePreview,
  } = useImage((recipe && recipe.image) || null);
  const { setAlert } = useAlertContext();
  const router = useRouter();

  let errorsObj = {};

  const addItems = (e) => {
    const { name } = e.target.dataset;
    setData({
      ...data,
      [name]: [...data[name], { _id: v4(), value: "" }],
    });
  };
  const onChangeItems = (e, index) => {
    onChangeArray(data, setData, errors, setErrors, e, index, errorsObj);
  };
  const onRemoveItems = (e, id) => {
    const { name } = e.target.dataset;
    if (data[name].length > 1) {
      setData({
        ...data,
        [name]: data[name].filter((item) => item._id !== id),
      });
    }
  };
  const addCategories = (category) => {
    setErrors({ ...errors, categories: false });
    setData({ ...data, categories: [...data.categories, category] });
  };
  const onRemoveCategories = (recipe) => {
    setData({
      ...data,
      categories: data.categories.filter(
        (category) => category._id !== recipe._id
      ),
    });
  };

  const onSelectDifficulty = (selectedOption) => {
    errorsObj.difficulty = false;
    setData({ ...data, difficulty: selectedOption });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value !== "") {
      errors[name] = false;
    }
    setData({ ...data, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    validateError(data, errorsObj, setErrors);
    const errorArr = Object.values(errorsObj);
    const hasError = errorArr.some((err) => err === true);
    if (hasError) {
      return;
    }
    const formData = { ...data };
    formData.ingredients = data.ingredients.map((ingredient) => ({
      value: ingredient.value,
    }));
    formData.instructions = data.instructions.map((instruction) => ({
      value: instruction.value,
    }));
    try {
      setLoading(true);
      const image = await handleImageUpload(file);
      const payload = {
        ...formData,
        image,
      };
      let res;
      if (isEdit) {
        res = await axios.put(`/api/recipes/${recipe._id}`, payload);
      } else {
        res = await axios.post("/api/recipes", payload);
      }
      setAlert(res.data.message);
      router.push("/").then(() => {
        toggle();
        window.scrollTo(0, 0);
      });
    } catch (error) {
      setAlert(error.response.data.error, "danger");
    } finally {
      setLoading(false);
    }
  };

  return {
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
  };
};

export default useRecipe;
