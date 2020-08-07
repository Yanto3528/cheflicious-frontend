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
    cursor: pointer;
  }
  > span {
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

export const FormSubtitle = styled.p`
  margin-top: 20px;
  margin-bottom: 30px;
`;
