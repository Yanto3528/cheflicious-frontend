import ReactMarkdown from "react-markdown/with-html";
import { useNotification } from "../../../context/NotificationContext";
import dropdownVariants from "../variants";
import {
  NotificationDropdownContainer,
  NotificationDropdownHeader,
  NotificationDropdownItem,
} from "./styles";
import Avatar from "../../../styles/shared/Avatar";

const NotificationDropdown = () => {
  const { notifications } = useNotification();
  return (
    <NotificationDropdownContainer
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <NotificationDropdownHeader>
        <h3>Notification</h3>
      </NotificationDropdownHeader>
      {notifications.map((notification) => (
        <NotificationDropdownItem key={notification._id}>
          <Avatar
            src={notification.sender.avatar}
            alt={notification.sender.name}
          />
          <div>
            <p>
              <ReactMarkdown source={notification.message} escapeHtml={false} />
            </p>
            <span>4 days ago</span>
          </div>
        </NotificationDropdownItem>
      ))}
    </NotificationDropdownContainer>
  );
};

export default NotificationDropdown;
