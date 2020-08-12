import styled from "styled-components";
import { Form, FormGroup } from "../../../styles/shared/Form";

export default styled.div`
  width: 500px;
  max-width: 100%;
  margin: 0 auto;
  ${Form} {
    padding: 20px;
    border-radius: 5px;
  }
  ${FormGroup} {
    padding: 0;
  }
`;
