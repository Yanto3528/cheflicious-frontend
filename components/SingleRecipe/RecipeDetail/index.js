import Link from "next/link";
import axios from "axios";
import OutsideClickHandler from "react-outside-click-handler";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useAlertContext } from "../../../context/AlertContext";
import { useRecipeContext } from "../../../context/RecipeContext";
import RecipeInstructions from "../RecipeInstructions";
import RecipeIngredients from "../RecipeIngredients";
import RecipeInput from "../../RecipeInput";
import Dropdown from "../../Dropdown";
import { Ellipsis } from "../../Icons";
import useToggle from "../../../lib/hook/useToggle";

import { RecipeDetailContainer, RecipeDetailHeader } from "./styles";
import Badge, { BadgeGroup } from "../../../styles/shared/Badge";

const SingleRecipeDetail = ({ recipe }) => {
  const [showDropdown, toggleDropdown, setDropdown] = useToggle();
  const { toggleShowEditRecipe } = useRecipeContext();
  const { setAlert } = useAlertContext();
  const router = useRouter();

  const onEditRecipe = () => toggleShowEditRecipe();

  const onDeleteRecipe = async () => {
    try {
      const res = await axios.delete(`/api/recipes/${recipe._id}`);
      setAlert(res.data.message);
      router.push("/");
    } catch (error) {
      setAlert("Cannot delete recipe at the moment.", "danger");
    }
  };

  return (
    <React.Fragment>
      <RecipeDetailContainer>
        <img src={recipe.image} alt={`${recipe.slug}-image`} />
        <BadgeGroup>
          {recipe.categories.map((category) => (
            <Link
              href="/recipes/categories/[slug]"
              as={`/recipes/categories/${category.slug}`}
              key={category._id}
            >
              <Badge>{category.value}</Badge>
            </Link>
          ))}
        </BadgeGroup>
        <RecipeDetailHeader>
          <div>
            <h1>{recipe.title}</h1>
            <OutsideClickHandler onOutsideClick={() => setDropdown(false)}>
              <span onClick={toggleDropdown}>
                <Ellipsis />
                <AnimatePresence>
                  {showDropdown && (
                    <Dropdown
                      toggle={toggleDropdown}
                      toggleEdit={onEditRecipe}
                      onDelete={onDeleteRecipe}
                    />
                  )}
                </AnimatePresence>
              </span>
            </OutsideClickHandler>
          </div>
          <span>
            by{" "}
            <Link href="/profile/:id" as={`/profile/${recipe.author._id}`}>
              <a>{recipe.author.name}</a>
            </Link>
          </span>
          <p>{recipe.description}</p>
        </RecipeDetailHeader>
        <RecipeIngredients
          ingredients={recipe.ingredients}
          servings={recipe.servings}
        />
        <RecipeInstructions
          instructions={recipe.instructions}
          cookingTime={recipe.cookingTime}
          difficulty={recipe.difficulty}
        />
      </RecipeDetailContainer>
    </React.Fragment>
  );
};

export default SingleRecipeDetail;
