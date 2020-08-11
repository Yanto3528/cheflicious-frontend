import { useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import useSWR from "swr";
import OutsideClickHandler from "react-outside-click-handler";
import { AnimatePresence } from "framer-motion";
import useToggle from "../../../lib/hook/useToggle";
import Dropdown from "../../Dropdown";
import { Ellipsis } from "../../Icons";
import Button from "../../Button";

import calculateRows from "../../../utils/calculateRows";
import {
  CommentContainer,
  CommentHeader,
  CommentHeaderDetail,
  CommentText,
  EllipsisContainer,
  CommentForm,
  CommentInput,
} from "./styles";
import { AddCommentFormGroup } from "../AddComment/styles";
import Avatar from "../../../styles/shared/Avatar";

const Comment = ({ comment, onDelete, onEdit }) => {
  const { data: currentUser } = useSWR("/api/users/me");
  const [rows, setRows] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showDropdown, toggleDropdown, setDropdown] = useToggle();
  const [showEdit, toggleEdit] = useToggle();

  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: { content: comment.content },
  });

  const handleDelete = () => onDelete(comment._id);

  const onShowEdit = () => {
    setDropdown(false);
    toggleEdit();
  };

  const onChange = (e) => {
    const currentRows = calculateRows(e.target);
    setRows(currentRows);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    await onEdit(comment._id, data);
    setLoading(false);
    toggleEdit();
    reset();
  };

  return (
    <CommentContainer>
      <Avatar src={comment.author.avatar} alt={comment.author.name} />
      <div>
        <CommentHeader>
          <CommentHeaderDetail>
            <p>{comment.author.name}</p>
            <span>{moment(comment.createdAt).fromNow()}</span>
          </CommentHeaderDetail>
          {currentUser && currentUser._id === comment.author._id && !showEdit && (
            <OutsideClickHandler onOutsideClick={() => setDropdown(false)}>
              <EllipsisContainer onClick={() => setDropdown(true)}>
                <Ellipsis />
                <AnimatePresence>
                  {showDropdown && (
                    <Dropdown
                      toggle={toggleDropdown}
                      onDelete={handleDelete}
                      toggleEdit={onShowEdit}
                    />
                  )}
                </AnimatePresence>
              </EllipsisContainer>
            </OutsideClickHandler>
          )}
        </CommentHeader>
        {showEdit ? (
          <CommentForm onSubmit={handleSubmit(onSubmit)}>
            <AddCommentFormGroup>
              <textarea
                placeholder="Write a comment..."
                rows={rows}
                onChange={onChange}
                name="content"
                ref={register({ required: true })}
              />
            </AddCommentFormGroup>
            <div className="button-group">
              <Button neutral onClick={toggleEdit} loading={loading}>
                Cancel
              </Button>
              <Button loading={loading}>Submit</Button>
            </div>
          </CommentForm>
        ) : (
          <CommentText>{comment.content}</CommentText>
        )}
      </div>
    </CommentContainer>
  );
};

export default Comment;
