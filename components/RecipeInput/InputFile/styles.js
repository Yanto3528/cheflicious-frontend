import styled, { css } from "styled-components";

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
