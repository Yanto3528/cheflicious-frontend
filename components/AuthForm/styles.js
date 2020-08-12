import styled, { css } from "styled-components";
import { FormGroup } from "../../styles/shared/Form";

export const AuthFormContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  > img {
    width: 50%;
    object-fit: cover;
  }
  > div {
    background-color: ${({ theme }) => theme.primaryLight};
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 1150px) {
    > img {
      display: none;
    }
    > div {
      flex-basis: 100%;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  max-width: 100vw;
  padding: 0 10px;
  ${FormGroup} {
    padding: 0;
  }
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
  text-align: center;
`;
