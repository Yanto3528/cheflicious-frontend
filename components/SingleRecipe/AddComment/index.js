import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import calculateRows from "../../../utils/calculateRows";

import { AddCommentContainer, AddCommentFormGroup } from "./styles";
import Avatar from "../../../styles/shared/Avatar";

const AddComment = () => {
  const [content, setContent] = useState("");
  const [rows, setRows] = useState(1);

  const onChange = (e) => {
    const currentRows = calculateRows(e.target);
    setContent(e.target.value);
    setRows(currentRows);
  };

  return (
    <AddCommentContainer>
      <Avatar
        src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=80"
        alt=""
      />
      <AddCommentFormGroup>
        <textarea
          placeholder="Write a comment..."
          rows={rows}
          onChange={onChange}
          value={content}
        />
        <button>Send</button>
      </AddCommentFormGroup>
    </AddCommentContainer>
  );
};

export default AddComment;
