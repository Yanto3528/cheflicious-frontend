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

export const RoundedBadge = styled.span`
  width: 18px;
  height: 18px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  position: absolute;
  top: -15px;
  right: -8px;
`;

export const BadgeGroup = styled.div`
  padding: 20px;
  gap: 10px;
`;
