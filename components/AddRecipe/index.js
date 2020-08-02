import ClientOnlyPortal from "../ClientOnlyPortal";
import { Camera, Close, Add } from "../Icons";
import MultipleSelect from "../MultipleSelect";
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

const AddRecipe = ({ title }) => {
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
            <MultipleSelect placeholder="Choose Category" />
          </AddRecipeFormGroup>
          <AddRecipeFormGroupContainer>
            <h3>Ingredients</h3>
            <AddRecipeFormGroup>
              <AddRecipeInput
                type="text"
                placeholder="Ingredient..."
                name="ingredient"
                id="ingredient"
              />
              <CloseIcon>
                <Close />
              </CloseIcon>
            </AddRecipeFormGroup>
            <AddRecipeFormGroup>
              <AddRecipeInput
                type="text"
                placeholder="Ingredient..."
                name="ingredient"
                id="ingredient"
              />
              <CloseIcon>
                <Close />
              </CloseIcon>
            </AddRecipeFormGroup>
            <AddButton>
              <span>
                <Add />
              </span>
              <p>Add Ingredients</p>
            </AddButton>
          </AddRecipeFormGroupContainer>
          <AddRecipeFormGroupContainer>
            <h3>Steps</h3>
            <StepFormGroup>
              <p>1</p>
              <AddRecipeTextaera
                rows="5"
                placeholder="Describe this step"
                name="step"
                id="step"
              />
              <CloseIcon top>
                <Close />
              </CloseIcon>
            </StepFormGroup>
            <StepFormGroup>
              <p>2</p>
              <AddRecipeTextaera
                rows="5"
                placeholder="Describe this step"
                name="step"
                id="step"
              />
              <CloseIcon top>
                <Close />
              </CloseIcon>
            </StepFormGroup>
            <AddButton>
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
