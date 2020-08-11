import { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { useAlertContext } from "../../../context/AlertContext";
import AddComment from "../AddComment";
import Comment from "../Comment";

import { HeartOutline, Heart } from "../../Icons";
import { CommentsContainer, CommentsHeader, LikesContainer } from "./styles";

const Comments = ({ recipe }) => {
  const { data: currentUser } = useSWR("/api/users/me");
  const { setAlert } = useAlertContext();

  const [data, setData] = useState(recipe);
  const [comments, setComments] = useState(recipe.comments);
  const [loading, setLoading] = useState(false);

  const onLikeRecipe = async () => {
    if (loading) {
      return;
    }
    try {
      setLoading(true);
      if (data.likes.includes(currentUser._id)) {
        setData({
          ...data,
          likes: data.likes.filter((like) => like !== currentUser._id),
        });
      } else {
        setData({ ...data, likes: [...data.likes, currentUser._id] });
      }
      await axios.put(`/api/recipes/${recipe._id}/like`);
    } catch (error) {
      console.log(error);
      setAlert("Cannot like recipe at the moment", "danger");
    } finally {
      setLoading(false);
    }
  };

  const onDeleteComment = async (id) => {
    try {
      await axios.delete(`/api/comments/${id}`);
      setComments(comments.filter((comment) => comment._id !== id));
    } catch (error) {
      setAlert("Cannot delete comment at the moment.", "danger");
    }
  };

  const onEditComment = async (id, data) => {
    try {
      const res = await axios.put(`/api/comments/${id}`, data);
      setComments(
        comments.map((comment) => (comment._id === id ? res.data : comment))
      );
    } catch (error) {
      setAlert("Cannot edit comment at the moment.", "danger");
    }
  };

  return (
    <CommentsContainer>
      <CommentsHeader>
        <h3>Comments</h3>
        <LikesContainer onClick={onLikeRecipe}>
          {currentUser && data.likes.includes(currentUser._id) ? (
            <Heart />
          ) : (
            <HeartOutline />
          )}
          <span>{data.likes.length} people likes this</span>
        </LikesContainer>
      </CommentsHeader>
      {comments &&
        comments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            onDelete={onDeleteComment}
            onEdit={onEditComment}
          />
        ))}
      <AddComment recipeId={recipe._id} />
    </CommentsContainer>
  );
};

export default Comments;
