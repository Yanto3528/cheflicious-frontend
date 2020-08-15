import styled from "styled-components";
import { motion } from "framer-motion";

export const AccountDropdownContainer = styled(motion.div)`
  position: absolute;
  bottom: 10px;
  right: 0;
  z-index: 20;
  transform: translateY(100%);
  background-color: ${({ theme }) => theme.lightgrey};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 5px;
  overflow: hidden;
  width: 300px;
  @media only screen and (max-width: 500px) {
    width: 100vw;
    bottom: 0;
  }
`;

export const AccountDropdownHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 20px;
  div {
    flex: 1;
  }
  p {
    font-weight: 600;
    color: ${({ theme }) => theme.darkgrey};
  }
  span {
    font-size: 1.4rem;
  }
`;

export const AccountDropdownItem = styled.div`
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
  :last-child {
    border-top: 1px solid ${({ theme }) => theme.grey2};
  }
  &:hover {
    background-color: ${({ theme }) => theme.lightgrey2};
  }
`;
