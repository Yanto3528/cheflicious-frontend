import { useState } from "react";
import axios from "axios";
import moment from "moment";
import useToggle from "../../../lib/hook/useToggle";
import { useAuth } from "../../../context/AuthContext";
import { useAlert } from "../../../context/AlertContext";
import AddComment from "../AddComment";
import Dropdown from "../../Dropdown";
import Comment from "../Comment";
import { Ellipsis } from "../../Icons";

import { HeartOutline, Heart } from "../../Icons";
import { CommentsContainer, CommentsHeader, LikesContainer } from "./styles";
import Avatar from "../../../styles/shared/Avatar";

const Comments = ({ recipe }) => {
  const { user } = useAuth();
  const { setAlert } = useAlert();
  const [data, setData] = useState(recipe);
  const [loading, setLoading] = useState(false);
  const [showDropdown, toggleDropdown] = useState(false);

  const onLikeRecipe = async () => {
    if (loading) {
      return;
    }
    try {
      setLoading(true);
      if (data.likes.includes(user._id)) {
        setData({
          ...data,
          likes: data.likes.filter((like) => like !== user._id),
        });
      } else {
        setData({ ...data, likes: [...data.likes, user._id] });
      }
      await axios.put(`/api/recipes/${recipe._id}/like`);
    } catch (error) {
      console.log(error);
      setAlert("Cannot like recipe at the moment", "danger");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CommentsContainer>
      <CommentsHeader>
        <h3>Comments</h3>
        <LikesContainer onClick={onLikeRecipe}>
          {user && data.likes.includes(user._id) ? <Heart /> : <HeartOutline />}
          <span>{data.likes.length} people likes this</span>
        </LikesContainer>
      </CommentsHeader>
      {data.comments &&
        data.comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      <AddComment recipeId={recipe._id} />
    </CommentsContainer>
  );
};

export default Comments;
