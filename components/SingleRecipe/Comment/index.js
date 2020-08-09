import moment from "moment";
import OutsideClickHandler from "react-outside-click-handler";
import { AnimatePresence } from "framer-motion";
import useToggle from "../../../lib/hook/useToggle";
import Dropdown from "../../Dropdown";
import { Ellipsis } from "../../Icons";
import {
  CommentContainer,
  CommentHeader,
  CommentHeaderDetail,
  CommentText,
  EllipsisContainer,
} from "./styles";
import Avatar from "../../../styles/shared/Avatar";

const Comment = ({ comment }) => {
  const [showDropdown, toggleDropdown, setDropdown] = useToggle();
  return (
    <CommentContainer>
      <Avatar src={comment.author.avatar} alt={comment.author.name} />
      <div>
        <CommentHeader>
          <CommentHeaderDetail>
            <p>{comment.author.name}</p>
            <span>{moment(comment.createdAt).fromNow()}</span>
          </CommentHeaderDetail>
          <OutsideClickHandler onOutsideClick={() => setDropdown(false)}>
            <EllipsisContainer onClick={() => setDropdown(true)}>
              <Ellipsis />
              <AnimatePresence>
                {showDropdown && <Dropdown toggle={toggleDropdown} />}
              </AnimatePresence>
            </EllipsisContainer>
          </OutsideClickHandler>
        </CommentHeader>
        <CommentText>{comment.content}</CommentText>
      </div>
    </CommentContainer>
  );
};

export default Comment;
