import styled from "styled-components";

export default styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.lightgrey2};
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1.4rem;
`;

export const BadgeGroup = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;
