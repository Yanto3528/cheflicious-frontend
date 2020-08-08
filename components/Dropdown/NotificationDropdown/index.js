import { useEffect } from "react";
import ReactMarkdown from "react-markdown/with-html";
import { useNotification } from "../../../context/NotificationContext";
import dropdownVariants from "../variants";
import CloseIcon from "../../CloseIcon";
import {
  NotificationDropdownContainer,
  NotificationDropdownHeader,
  NotificationItemContainer,
  NotificationDropdownItem,
  NotificationPlaceholder,
} from "./styles";
import Avatar from "../../../styles/shared/Avatar";

const NotificationDropdown = () => {
  const {
    notifications,
    readAllNotifications,
    deleteSingleNotification,
    deleteNotifications,
  } = useNotification();

  useEffect(() => {
    readAllNotifications();
  }, []);

  return (
    <NotificationDropdownContainer
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={(e) => e.stopPropagation()}
    >
      <NotificationDropdownHeader>
        <h3>Notification</h3>
        <p onClick={deleteNotifications}>Delete all</p>
      </NotificationDropdownHeader>
      <NotificationItemContainer>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <NotificationDropdownItem key={notification._id}>
              <Avatar
                src={notification.sender.avatar}
                alt={notification.sender.name}
              />
              <div>
                <ReactMarkdown
                  source={notification.message}
                  escapeHtml={false}
                />
                <span>4 days ago</span>
              </div>
              <CloseIcon
                onClick={() => deleteSingleNotification(notification._id)}
              />
            </NotificationDropdownItem>
          ))
        ) : (
          <NotificationPlaceholder>
            <p>No notifications</p>
          </NotificationPlaceholder>
        )}
      </NotificationItemContainer>
    </NotificationDropdownContainer>
  );
};

export default NotificationDropdown;
