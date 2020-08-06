import styled from "styled-components";
import { motion } from "framer-motion";

export default styled(motion.span)`
  display: inline-block;
  width: ${({ size }) => (size ? size : "40px")};
  height: ${({ size }) => (size ? size : "40px")};
  border: 5px solid ${({ theme }) => theme.primary};
  border-top-color: transparent;
  border-radius: 50%;
`;
