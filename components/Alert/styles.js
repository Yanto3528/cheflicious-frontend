import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const backgroundColorStyles = css`
  background-color: ${({ type, theme }) => {
    switch (type) {
      case "danger":
        return theme.red;
      default:
        return theme.primary;
    }
  }};
`;

export const AlertContainer = styled.div`
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4000;
`;

export const AlertOuterContainer = styled(motion.div)`
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const AlertInnerContainer = styled.div`
  position: relative;
  margin-left: auto;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 20px;
  &:after {
    content: "";
    width: calc(100% + 5px);
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    ${backgroundColorStyles}
    border-radius: 10px;
  }
  p {
    flex: 1;
    font-size: 1.4rem;
    margin-left: 10px;
    color: ${({ theme }) => theme.darkgrey};
  }
`;

export const AlertIconContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${backgroundColorStyles}
  svg {
    path {
      stroke: white;
    }
  }
`;
