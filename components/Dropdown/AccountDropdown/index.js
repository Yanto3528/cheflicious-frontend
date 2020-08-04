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
  const { user, signout } = useContext(AuthContext);
  return (
    <AccountDropdownContainer
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <AccountDropdownHeader>
        <Avatar src={user.avatar} alt={user.name} />
        <div>
          <p>{user.name}</p>
          <span>{user.email}</span>
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
