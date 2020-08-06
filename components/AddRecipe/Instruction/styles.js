import styled from "styled-components";

export const InstructionFormGroup = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  position: relative;
  display: flex;
  align-items: flex-start;
  p {
    font-weight: 900;
    font-size: 2rem;
    color: ${({ theme }) => theme.darkgrey};
    margin-right: 10px;
    padding-top: 5px;
  }
`;
