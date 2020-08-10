import styled from "styled-components";
import { motion } from "framer-motion";

export const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const ModalContainer = styled(motion.div)`
  position: relative;
  background-color: white;
  max-width: 90%;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow};
  > div:first-child {
    padding: 40px 40px 10px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const IconContainer = styled.span`
  border: 5px solid ${({ theme }) => theme.red};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  svg {
    width: 30px;
    height: 30px;
    path {
      stroke: ${({ theme }) => theme.red};
      stroke-width: 3px;
    }
  }
`;
export const ButtonGroup = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    border-radius: 0;
    padding: 15px 20px;
    /* width: 150px; */
    /* &:not(:last-child) {
      margin-right: 30px;
    } */
  }
`;
