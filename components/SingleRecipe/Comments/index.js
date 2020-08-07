import moment from "moment";

import AddComment from "../AddComment";

import { HeartOutline } from "../../Icons";
import {
  CommentsContainer,
  Comment,
  CommentText,
  CommentsHeader,
  CommentHeader,
  LikesContainer,
} from "./styles";
import Avatar from "../../../styles/shared/Avatar";

const Comments = ({ recipe }) => {
  return (
    <CommentsContainer>
      <CommentsHeader>
        <h3>Comments</h3>
        <LikesContainer>
          <HeartOutline /> 1k people like this
        </LikesContainer>
      </CommentsHeader>
      {recipe.comments.map((comment) => (
        <Comment>
          <Avatar src={comment.author.avatar} alt={comment.author.name} />
          <div>
            <CommentHeader>
              <p>{comment.author.name}</p>
              <span>{moment(comment.createdAt).fromNow()}</span>
            </CommentHeader>
            <CommentText>{comment.content}</CommentText>
          </div>
        </Comment>
      ))}
      <AddComment recipeId={recipe._id} />
    </CommentsContainer>
  );
};

export default Comments;
