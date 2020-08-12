import styled, { css } from "styled-components";

export const CommentsContainer = styled.div`
  margin-top: 25px;
  h3 {
    font-weight: 600;
  }
`;

export const CommentsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.grey2};
`;

export const LikesContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
    cursor: pointer;
    transition: all 0.4s;
    &:hover {
      transform: scale(1.2);
    }
  }
  span {
    text-align: right;
  }
`;
