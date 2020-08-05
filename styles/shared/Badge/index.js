import styled from "styled-components";

export default styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.lightgrey2};
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1.4rem;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.grey};
    color: white;
  }
`;

export const BadgeGroup = styled.div`
  padding: 20px;
  /* display: flex;
  flex-wrap: wrap;
  align-items: flex-start; */
  gap: 10px;
`;
