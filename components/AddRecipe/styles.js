import styled, { css } from "styled-components";
import { motion } from "framer-motion";

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

export const AddRecipeContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  background-color: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

export const AddRecipeForm = styled.form`
  background-color: ${({ theme }) => theme.lightgrey};
  box-shadow: ${({ theme }) => theme.boxShadow};
  width: 500px;
  max-width: 100%;
  margin-top: 30px;
`;

export const InputFileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 375px;
  background-color: ${({ theme }) => theme.lightgrey2};
  margin-bottom: 20px;
  label {
    cursor: pointer;
    ${({ src }) =>
      src &&
      css`
        width: 100%;
        height: 100%;
        cursor: pointer;
        background-image: ${({ src }) => `url(${src})`};
        background-position: center;
        background-size: cover;
      `}
  }
  input {
    display: none;
  }
`;

export const CameraUpload = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  svg {
    width: 40px;
    height: 40px;
    path {
      stroke: ${({ theme }) => theme.primary};
    }
  }
`;

export const AddRecipeFormGroup = styled.div`
  margin-bottom: 20px;
  padding: 0 10px;
  position: relative;
  label {
    display: block;
    font-weight: 600;
    color: ${({ theme }) => theme.darkgrey};
  }
`;

export const AddRecipeFormGroupContainer = styled.div`
  > div:not(:last-child) {
    margin-bottom: 10px;
  }
  h3 {
    border-bottom: 1px solid ${({ theme }) => theme.grey2};
    padding-bottom: 10px;
    margin-bottom: 10px;
    padding-left: 10px;
    font-weight: 600;
  }
`;

export const AddRecipeInput = styled.input`
  ${inputBaseStyles}
`;

export const AddRecipeTextaera = styled.textarea`
  ${inputBaseStyles}
  resize :none;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AddRecipeSelect = styled.div`
  ${inputBaseStyles};
`;

export const AddButton = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.primary};
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.primary};
    svg {
      width: 25px;
      height: 25px;
      path {
        stroke: ${({ theme }) => theme.primary};
      }
    }
  }
`;

export const CloseIcon = styled.span`
  width: ${({ size }) => (size ? size : "20px")};
  height: ${({ size }) => (size ? size : "20px")};
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    path {
      stroke: ${({ color, theme }) => (color ? color : theme.grey)};
    }
  }
  ${({ top }) =>
    top &&
    css`
      top: ${({ wide }) => (wide ? "30px" : "20px")};
      right: ${({ wide }) => (wide ? "30px" : "20px")};
      transform: translateY(0);
    `}
`;

export const InstructionFormGroup = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  position: relative;
  display: flex;
  align-items: flex-start;
  p {
    font-weight: 900;
    font-size: 2rem;
    color: ${({ theme }) => theme.darkgrey};
    margin-right: 10px;
    padding-top: 5px;
  }
`;

export const SubmitButton = styled.button`
  outline: none;
  border: none;
  font-size: 1.4rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    opacity: 0.8;
  }
`;