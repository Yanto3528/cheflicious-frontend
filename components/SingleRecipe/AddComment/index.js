import { useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import calculateRows from "../../../utils/calculateRows";

import Button from "../../Button";
import { AddCommentFormContainer, AddCommentFormGroup } from "./styles";
import Avatar from "../../../styles/shared/Avatar";

const AddComment = ({ onAdd, currentUser }) => {
  const [rows, setRows] = useState(1);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, errors, reset } = useForm();

  const onChange = (e) => {
    const currentRows = calculateRows(e.target);
    setRows(currentRows);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    await onAdd(data);
    setLoading(false);
    reset();
  };

  return (
    <AddCommentFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Avatar src={currentUser.avatar} alt={currentUser.name} />
      <AddCommentFormGroup>
        <textarea
          placeholder="Write a comment..."
          rows={rows}
          onChange={onChange}
          name="content"
          ref={register({ required: true })}
        />
        <Button loading={loading}>Send</Button>
      </AddCommentFormGroup>
    </AddCommentFormContainer>
  );
};

export default AddComment;
