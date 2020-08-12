import { useEffect } from "react";
import useSWR from "swr";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import useAxios from "../../../lib/hook/useAxios";
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

dayjs.extend(relativeTime);

const NotificationDropdown = () => {
  const { data: notifications, mutate } = useSWR("/api/notifications");
  const { API } = useAxios();

  const readAllNotifications = async () => {
    mutate(
      notifications.map((notification) => ({ ...notification, read: true })),
      false
    );
    await API("PUT", "/api/notifications");
    mutate();
  };

  useEffect(() => {
    readAllNotifications();
  }, []);

  const deleteSingleNotification = async (id) => {
    mutate(
      notifications.filter((notification) => notification._id !== id),
      false
    );
    await API("DELETE", `/api/notifications/${id}`);
    mutate();
  };

  const deleteNotifications = async () => {
    mutate([], false);
    await API("DELETE", "/api/notifications");
    mutate();
  };

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
                <div
                  dangerouslySetInnerHTML={{ __html: notification.message }}
                />
                <span>{dayjs(notification.createdAt).fromNow()}</span>
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
