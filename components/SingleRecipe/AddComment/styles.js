import styled from "styled-components";

export const AddCommentFormContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 20px 0;
  img {
    align-self: flex-start;
  }
  @media only screen and (max-width: 360px) {
    img {
      width: 40px;
      height: 40px;
    }
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
    width: auto;
    margin-left: 10px;
  }
  @media only screen and (max-width: 360px) {
    textarea,
    button {
      padding: 10px;
    }
  }
`;
