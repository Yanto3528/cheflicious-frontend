import styled, { css } from "styled-components";

const pillStyles = css`
  outline: none;
  border: none;
  border-radius: 50px;
  padding: 15px 20px;
  width: 100%;
  transition: all 0.4s;
`;

export const AuthFormContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  > img {
    height: 100%;
    object-fit: cover;
    flex-basis: 50%;
  }
  > div {
    background-color: ${({ theme }) => theme.primaryLight};
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  img {
    width: 200px;
  }
  span {
    align-self: flex-end;
    margin-top: 10px;
    margin-bottom: 20px;
    a {
      color: ${({ theme }) => theme.primary};
      transition: all 0.4s;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const FormGroup = styled.div`
  margin-top: 20px;
  width: 100%;
  p {
    color: ${({ theme }) => theme.red};
    margin-top: 5px;
    padding-left: 20px;
  }
`;

export const FormInput = styled.input`
  background-color: white;
  ${pillStyles}
  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${({ theme }) => theme.red};
    `}
`;

export const FormSubtitle = styled.p`
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const FormButton = styled.button`
  ${pillStyles}
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
