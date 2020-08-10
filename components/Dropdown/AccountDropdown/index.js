import Link from "next/link";
import { useAuthContext } from "../../../context/AuthContext";
import Avatar from "../../../styles/shared/Avatar";
import { Setting, Person, PowerOff } from "../../Icons";
import dropdownVariants from "../variants";

import {
  AccountDropdownContainer,
  AccountDropdownHeader,
  AccountDropdownItem,
} from "./styles";

const AccountDropdown = ({ toggle }) => {
  const { user, signout } = useAuthContext();

  const handleLogout = () => {
    toggle();
    signout();
  };

  return (
    <AccountDropdownContainer
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={(e) => e.stopPropagation()}
    >
      <AccountDropdownHeader>
        <Avatar src={user.avatar} alt={user.name} />
        <div>
          <p>{user.name}</p>
          <span>{user.email}</span>
        </div>
      </AccountDropdownHeader>
      <Link href="/profile/[id]" as={`/profile/${user._id}`}>
        <AccountDropdownItem onClick={toggle}>
          <Person />
          <span>My profile</span>
        </AccountDropdownItem>
      </Link>
      <Link href="/profile/edit/account">
        <AccountDropdownItem onClick={toggle}>
          <Setting />
          <span>Settings</span>
        </AccountDropdownItem>
      </Link>
      <AccountDropdownItem onClick={handleLogout}>
        <PowerOff />
        <span>Log out</span>
      </AccountDropdownItem>
    </AccountDropdownContainer>
  );
};

export default AccountDropdown;
