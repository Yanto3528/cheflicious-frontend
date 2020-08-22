import { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
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
} from "./styles";
import { AddCommentFormGroup } from "../AddComment/styles";
import Avatar from "../../../styles/shared/Avatar";
import { useAuthContext } from "../../../context/AuthContext";

dayjs.extend(relativeTime);

const Comment = ({ comment, onDelete, onEdit }) => {
  const { currentUser } = useAuthContext();
  const [content, setContent] = useState(comment.content);
  const [rows, setRows] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showDropdown, toggleDropdown, setDropdown] = useToggle();
  const [showEdit, toggleEdit] = useToggle();

  const handleDelete = () => onDelete(comment._id);

  const onShowEdit = () => {
    setDropdown(false);
    toggleEdit();
  };

  const onChange = (e) => {
    const currentRows = calculateRows(e.target);
    setRows(currentRows);
    setContent(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onEdit(comment._id, { content });
    setLoading(false);
    toggleEdit();
  };

  return (
    <CommentContainer>
      <Avatar src={comment.author.avatar} alt={comment.author.name} />
      <div>
        <CommentHeader>
          <CommentHeaderDetail>
            <p>{comment.author.name}</p>
            <span>{dayjs(comment.createdAt).fromNow()}</span>
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
          <CommentForm onSubmit={onSubmit}>
            <AddCommentFormGroup>
              <textarea
                placeholder="Write a comment..."
                rows={rows}
                onChange={onChange}
                name="content"
                value={content}
              />
            </AddCommentFormGroup>
            <div className="button-group">
              <Button neutral onClick={toggleEdit} disabled={loading}>
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
