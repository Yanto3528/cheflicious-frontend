import styled from "styled-components";

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
    path {
      transition: all 0.4s;
    }
    &:hover {
      fill: ${({ theme }) => theme.red};
      transform: scale(1.2);
      path {
        stroke: ${({ theme }) => theme.red};
      }
    }
  }
`;

export const Comment = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.grey2};
  > div {
    flex: 1;
  }
`;

export const CommentText = styled.p`
  white-space: pre;
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  p {
    margin-right: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.darkgrey};
  }
  span {
    font-size: 1.2rem;
  }
`;
