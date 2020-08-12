import styled from "styled-components";
import { motion } from "framer-motion";

export default styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  margin-top: 24px;
  @media only screen and (max-width: 1275px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 875px) {
    grid-template-columns: 1fr;
  }
`;
