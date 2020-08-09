import styled from "styled-components";
import { motion } from "framer-motion";

export const DropdownContainer = styled(motion.div)`
  position: absolute;
  bottom: 10px;
  right: 0;
  z-index: 20;
  transform: translateY(100%);
  background-color: ${({ theme }) => theme.lightgrey};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 5px;
  overflow: hidden;
  width: 200px;
`;

export const DropdownItem = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
  }
  span {
    margin-left: 10px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.lightgrey2};
  }
`;
