import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/AuthContext";
import useAxios from "../../../lib/hook/useAxios";
import calculateRows from "../../../utils/calculateRows";

import Button from "../../Button";
import { AddCommentFormContainer, AddCommentFormGroup } from "./styles";
import Avatar from "../../../styles/shared/Avatar";

const AddComment = ({ recipeId }) => {
  const [rows, setRows] = useState(1);
  const { user } = useAuth();
  const { data: comment, loading, error, API } = useAxios();

  const { register, handleSubmit, errors, reset } = useForm();

  const onChange = (e) => {
    const currentRows = calculateRows(e.target);
    setRows(currentRows);
  };

  const onSubmit = async (data) => {
    await API(`/api/recipes/${recipeId}/comments`, data, "POST");
    reset();
  };

  return (
    <AddCommentFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Avatar src={user && user.avatar} alt={user && user.name} />
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
