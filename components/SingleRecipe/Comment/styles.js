import styled from "styled-components";

export const CommentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.grey2};
  > div {
    flex: 1;
  }
  @media only screen and (max-width: 360px) {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const CommentText = styled.p`
  white-space: pre;
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  position: relative;
`;

export const CommentHeaderDetail = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.darkgrey};
  }
  span {
    font-size: 1.2rem;
  }
`;

export const EllipsisContainer = styled.span`
  cursor: pointer;
  position: relative;
  font-size: 1.4rem;
`;

export const CommentForm = styled.form`
  button {
    width: 75px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button-group {
    display: flex;
    button:not(:last-child) {
      margin-right: 10px;
    }
  }
`;
