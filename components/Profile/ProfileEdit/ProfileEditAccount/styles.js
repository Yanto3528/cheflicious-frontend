import styled from "styled-components";
import { Form, FormGroup } from "../../../../styles/shared/Form";

export const ProfileEditAccountHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  input {
    display: none;
  }
  p {
    color: ${({ theme }) => theme.darkgrey};
    font-weight: 600;
  }
  span {
    color: ${({ theme }) => theme.primary};
    font-size: 1.6rem;
    cursor: pointer;
  }
`;
