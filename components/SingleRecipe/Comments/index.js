import { useState } from "react";
import useSWR from "swr";
import { useAlertContext } from "../../../context/AlertContext";
import useAxios from "../../../lib/hook/useAxios";
import AddComment from "../AddComment";
import Comment from "../Comment";

import { HeartOutline, Heart } from "../../Icons";
import { CommentsContainer, CommentsHeader, LikesContainer } from "./styles";
import { useAuthContext } from "../../../context/AuthContext";

const Comments = ({ recipe }) => {
  const { currentUser } = useAuthContext();
  const { loading, API } = useAxios();

  const [data, setData] = useState(recipe);
  const [comments, setComments] = useState(recipe.comments);

  const onLikeRecipe = async () => {
    if (loading) {
      return;
    }
    if (data.likes.includes(currentUser._id)) {
      setData({
        ...data,
        likes: data.likes.filter((like) => like !== currentUser._id),
      });
    } else {
      setData({ ...data, likes: [...data.likes, currentUser._id] });
    }
    await API("PUT", `/api/recipes/${recipe._id}/like`);
  };

  const onAddComment = async (payload) => {
    const data = await API(
      "POST",
      `/api/recipes/${recipe._id}/comments`,
      payload
    );
    setComments([...comments, data]);
  };

  const onDeleteComment = async (id) => {
    setComments(comments.filter((comment) => comment._id !== id));
    await API("DELETE", `/api/comments/${id}`);
  };

  const onEditComment = async (id, payload) => {
    const data = await API("PUT", `/api/comments/${id}`, payload);
    setComments(
      comments.map((comment) => (comment._id === id ? data : comment))
    );
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
      {currentUser && (
        <AddComment onAdd={onAddComment} currentUser={currentUser} />
      )}
    </CommentsContainer>
  );
};

export default Comments;
