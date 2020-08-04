import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import Avatar from "../../../styles/shared/Avatar";
import { Setting, Person, PowerOff } from "../../Icons";
import dropdownVariants from "../variants";

import {
  AccountDropdownContainer,
  AccountDropdownHeader,
  AccountDropdownItem,
} from "./styles";

const AccountDropdown = ({ toggle }) => {
  const { signout } = useContext(AuthContext);
  return (
    <AccountDropdownContainer
      variants={dropdownVariants}
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
      <AccountDropdownItem onClick={signout}>
        <PowerOff />
        <span>Log out</span>
      </AccountDropdownItem>
    </AccountDropdownContainer>
  );
};

export default AccountDropdown;
