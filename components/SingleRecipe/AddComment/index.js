import { useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import useAxios from "../../../lib/hook/useAxios";
import calculateRows from "../../../utils/calculateRows";

import Button from "../../Button";
import { AddCommentFormContainer, AddCommentFormGroup } from "./styles";
import Avatar from "../../../styles/shared/Avatar";

const AddComment = ({ recipeId }) => {
  const { data: currentUser } = useSWR("/api/users/me");
  const [rows, setRows] = useState(1);
  const { loading, API } = useAxios();

  const { register, handleSubmit, errors, reset } = useForm();

  const onChange = (e) => {
    const currentRows = calculateRows(e.target);
    setRows(currentRows);
  };

  const onSubmit = async (data) => {
    await API("POST", `/api/recipes/${recipeId}/comments`, data);
    reset();
  };

  return (
    <AddCommentFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Avatar
        src={currentUser && currentUser.avatar}
        alt={currentUser && currentUser.name}
      />
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
