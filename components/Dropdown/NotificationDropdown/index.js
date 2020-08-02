import dropdownVariants from "../variants";
import {
  NotificationDropdownContainer,
  NotificationDropdownHeader,
  NotificationDropdownItem,
} from "./styles";
import Avatar from "../../../styles/shared/Avatar";

const NotificationDropdown = () => {
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
      <NotificationDropdownItem>
        <Avatar
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50&q=80"
          alt=""
        />
        <div>
          <p>
            <strong>Chris William</strong> followed you
          </p>
          <span>4 days ago</span>
        </div>
      </NotificationDropdownItem>
      <NotificationDropdownItem>
        <Avatar
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50&q=80"
          alt=""
        />
        <div>
          <p>
            <strong>Chris William</strong> followed you
          </p>
          <span>4 days ago</span>
        </div>
      </NotificationDropdownItem>
      <NotificationDropdownItem>
        <Avatar
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50&q=80"
          alt=""
        />
        <div>
          <p>
            <strong>Chris William</strong> commented on your recipe
          </p>
          <span>4 days ago</span>
        </div>
      </NotificationDropdownItem>
    </NotificationDropdownContainer>
  );
};

export default NotificationDropdown;
