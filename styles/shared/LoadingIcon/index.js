import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export default styled(motion.span)`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 5px solid ${({ color, theme }) => (color ? color : theme.primary)};
  border-top-color: transparent;
  border-radius: 50%;
  ${({ small }) =>
    small &&
    css`
      width: 14px;
      height: 14px;
      border-width: 2px;
    `}
`;

export const LoadingMoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  h3 {
    font-weight: 600;
  }
`;
