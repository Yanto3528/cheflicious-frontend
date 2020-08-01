import Avatar from "../../../styles/shared/Avatar";
import { Setting, Person, PowerOff } from "../../Icons";

import {
  AccountDropdownContainer,
  AccountDropdownHeader,
  AccountDropdownItem,
} from "./styles";

const accountDropdownVariants = {
  hidden: {
    scale: 0.4,
    opacity: 0,
    originY: 0,
    originX: 1,
    y: "100%",
  },
  visible: {
    scale: 1,
    opacity: 1,
    originY: 0,
    originX: 1,
    y: "100%",
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    scale: 0.4,
    opacity: 0,
    originY: 0,
    originX: 1,
    y: "100%",
    transition: {
      duration: 0.3,
    },
  },
};

const AccountDropdown = ({ toggle }) => {
  return (
    <AccountDropdownContainer
      variants={accountDropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <AccountDropdownHeader>
        <Avatar
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50&q=80"
          alt=""
        />
        <div>
          <p>Chris William</p>
          <span>chris@gmail.com</span>
        </div>
      </AccountDropdownHeader>
      <AccountDropdownItem>
        <Person />
        <span>My profile</span>
      </AccountDropdownItem>
      <AccountDropdownItem>
        <Setting />
        <span>Settings</span>
      </AccountDropdownItem>
      <AccountDropdownItem>
        <PowerOff />
        <span>Log out</span>
      </AccountDropdownItem>
    </AccountDropdownContainer>
  );
};

export default AccountDropdown;
