import styled from "styled-components";
import { motion } from "framer-motion";

export default styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(400px, 1fr));
  grid-gap: 24px;
  margin-top: 24px;
`;
