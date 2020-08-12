import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import useSWR from "swr";
import { useAlertContext } from "../../../context/AlertContext";
import Avatar from "../../../styles/shared/Avatar";
import { Setting, Person, PowerOff } from "../../Icons";
import dropdownVariants from "../variants";

import {
  AccountDropdownContainer,
  AccountDropdownHeader,
  AccountDropdownItem,
} from "./styles";

const AccountDropdown = ({ toggle }) => {
  const { data: currentUser, mutate } = useSWR("/api/users/me", {
    revalidateOnFocus: false,
  });
  const { setAlert } = useAlertContext();

  const handleLogout = async () => {
    toggle();
    try {
      await axios.post("/api/auth/logout");
      mutate(null);
      Router.push("/signin");
    } catch (error) {
      setAlert("There was a problem when logging out", "danger");
    }
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
        <Avatar src={currentUser.avatar} alt={currentUser.name} />
        <div>
          <p>{currentUser.name}</p>
          <span>{currentUser.email}</span>
        </div>
      </AccountDropdownHeader>
      <Link href="/profile/[id]" as={`/profile/${currentUser._id}`}>
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
