import AddComment from "../AddComment";

import { HeartOutline } from "../../Icons";
import {
  CommentsContainer,
  Comment,
  CommentsHeader,
  CommentHeader,
  LikesContainer,
} from "./styles";
import Avatar from "../../../styles/shared/Avatar";

const Comments = () => {
  return (
    <CommentsContainer>
      <CommentsHeader>
        <h3>Comments</h3>
        <LikesContainer>
          <HeartOutline /> 1k people like this
        </LikesContainer>
      </CommentsHeader>
      <Comment>
        <Avatar
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=80"
          alt=""
        />
        <div>
          <CommentHeader>
            <p>Sarah Williams</p>
            <span>2 days ago</span>
          </CommentHeader>
          <p>Looks delicious! I wanna try it at home</p>
        </div>
      </Comment>
      <Comment>
        <Avatar
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=80"
          alt=""
        />
        <div>
          <CommentHeader>
            <p>Sarah Williams</p>
            <span>2 days ago</span>
          </CommentHeader>
          <p>Looks delicious! I wanna try it at home</p>
        </div>
      </Comment>
      <Comment>
        <Avatar
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=80"
          alt=""
        />
        <div>
          <CommentHeader>
            <p>Sarah Williams</p>
            <span>2 days ago</span>
          </CommentHeader>
          <p>Looks delicious! I wanna try it at home</p>
        </div>
      </Comment>
      <AddComment />
    </CommentsContainer>
  );
};

export default Comments;
