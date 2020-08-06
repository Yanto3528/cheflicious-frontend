import styled from "styled-components";
import { motion } from "framer-motion";

export const NotificationDropdownContainer = styled(motion.div)`
  position: absolute;
  bottom: 10px;
  right: 0;
  z-index: 20;
  transform: translateY(100%);
  background-color: ${({ theme }) => theme.lightgrey};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 5px;
  overflow: hidden;
  width: 400px;
`;
export const NotificationDropdownHeader = styled.div`
  background-color: white;
  padding: 20px;
`;
export const NotificationDropdownItem = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.lightgrey2};
  cursor: pointer;
  strong {
    color: ${({ theme }) => theme.darkgrey};
    font-weight: 600;
  }
  span {
    font-size: 1.2rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.lightgrey2};
  }
`;
