import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import axios from "axios";
import useSWR from "swr";
import OutsideClickHandler from "react-outside-click-handler";
import Link from "next/link";
import { useRouter } from "next/router";

import { useAlertContext } from "../../../context/AlertContext";
import { useRecipeContext } from "../../../context/RecipeContext";
import RecipeInstructions from "../RecipeInstructions";
import RecipeIngredients from "../RecipeIngredients";
import Dropdown from "../../Dropdown";
import Modal from "../../Modal";
import { Ellipsis, Close } from "../../Icons";

import useToggle from "../../../lib/hook/useToggle";

import {
  RecipeDetailContainer,
  RecipeDetailHeader,
  EllipsisContainer,
} from "./styles";
import Badge, { BadgeGroup } from "../../../styles/shared/Badge";

const SingleRecipeDetail = ({ recipe }) => {
  const { data: currentUser } = useSWR("/api/users/me");
  const [loading, setLoading] = useState(false);
  const [showDropdown, toggleDropdown, setDropdown] = useToggle();
  const [showModal, toggleModal] = useToggle();
  const { toggleShowEditRecipe } = useRecipeContext();
  const { setAlert } = useAlertContext();
  const router = useRouter();

  const onDeleteRecipe = async () => {
    try {
      setLoading(true);
      const res = await axios.delete(`/api/recipes/${recipe._id}`);
      setAlert(res.data.message);
      router.push("/");
    } catch (error) {
      setAlert("Cannot delete recipe at the moment.", "danger");
    } finally {
      setLoading(false);
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
            {currentUser && currentUser._id === recipe.author._id && (
              <OutsideClickHandler onOutsideClick={() => setDropdown(false)}>
                <EllipsisContainer onClick={toggleDropdown}>
                  <Ellipsis />
                  <AnimatePresence>
                    {showDropdown && (
                      <Dropdown
                        toggle={toggleDropdown}
                        toggleEdit={toggleShowEditRecipe}
                        onDelete={toggleModal}
                      />
                    )}
                  </AnimatePresence>
                </EllipsisContainer>
              </OutsideClickHandler>
            )}
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
      <AnimatePresence>
        {showModal && (
          <Modal
            title="Are you sure?"
            subtitle="Do you really want to delete this?"
            icon={Close}
            onClick={onDeleteRecipe}
            toggle={toggleModal}
            loading={loading}
          />
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

export default SingleRecipeDetail;
