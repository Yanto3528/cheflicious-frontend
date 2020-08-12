import styled from "styled-components";
import { motion } from "framer-motion";

export const NotificationDropdownContainer = styled(motion.div)`
  position: absolute;
  bottom: 10px;
  right: 0;
  z-index: 20;
  transform: translate(100%);
  background-color: ${({ theme }) => theme.lightgrey};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 5px;
  overflow: hidden;
  width: 400px;
  @media only screen and (max-width: 800px) {
    right: -125px;
    bottom: -10px;
  }
  @media only screen and (max-width: 500px) {
    width: 90vw;
    right: 0;
    bottom: 0;
  }
`;
export const NotificationDropdownHeader = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }
`;

export const NotificationItemContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px ${({ theme }) => theme.grey};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.grey2};
    border-radius: 10px;
  }
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
  > div {
    flex: 1;
  }
  > span {
    position: static;
    margin-top: 10px;
    background-color: ${({ theme }) => theme.grey2};
    border-radius: 50%;
    svg {
      path {
        stroke: white;
      }
    }
  }
`;

export const NotificationPlaceholder = styled.div`
  padding: 20px;
  text-align: center;
`;
