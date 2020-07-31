import styled from "styled-components";

export const AddCommentContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 20px 0;
  img {
    align-self: flex-start;
  }
`;
export const AddCommentFormGroup = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  textarea,
  button {
    outline: none;
    border: none;
    padding: 15px 20px;
    border-radius: 5px;
    font-family: "Poppins", sans-serif;
  }
  textarea {
    background-color: ${({ theme }) => theme.lightgrey2};
    resize: none;
    line-height: 1.5;
    flex: 1;
  }
  button {
    align-self: flex-end;
    background-color: ${({ theme }) => theme.primary};
    color: white;
    font-family: "Poppins", sans-serif;
    margin-left: 10px;
    cursor: pointer;
    transition: all 0.4s;
    &:hover {
      opacity: 0.8;
    }
  }
`;
