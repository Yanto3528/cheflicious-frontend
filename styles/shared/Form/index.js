import styled, { css } from "styled-components";

const inputBaseStyles = css`
  background-color: white;
  padding: 10px;
  outline: none;
  border: 1px solid white;
  border-radius: 5px;
  transition: all 0.2s;
  &:not([type="number"]) {
    width: 100%;
    padding-right: 40px;
  }
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
  ${({ error }) =>
    error &&
    css`
      border-color: ${({ theme }) => theme.red};
      &:focus {
        border-color: ${({ theme }) => theme.red};
      }
    `}
`;

export const Form = styled.form`
  background-color: ${({ theme }) => theme.lightgrey};
  box-shadow: ${({ theme }) => theme.boxShadow};
  width: 500px;
  max-width: 100%;
  margin-top: 30px;
`;

export const Input = styled.input`
  ${inputBaseStyles}
`;

export const Textarea = styled.textarea`
  ${inputBaseStyles}
  resize :none;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SelectGroup = styled.div`
  ${inputBaseStyles};
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  padding: 0 10px;
  position: relative;
  label {
    display: block;
    font-weight: 600;
    color: ${({ theme }) => theme.darkgrey};
  }
`;
