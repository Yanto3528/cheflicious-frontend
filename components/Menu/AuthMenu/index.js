import Link from "next/link";
import useToggle from "../../../lib/hook/useToggle";
import { AnimatePresence } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import AccountDropdown from "../../Dropdown/AccountDropdown";
import NotificationDropdown from "../../Dropdown/NotificationDropdown";
import AddRecipe from "../../AddRecipe";

import {
  Add,
  CategoriesOutline,
  ChatBubbles,
  Notifications,
} from "../../Icons";
import Avatar from "../../../styles/shared/Avatar";
import { NavMenu, NavMenuItem, MenuIcon } from "../styles";

const AuthMenu = () => {
  const [
    showAccountDropdown,
    toggleAccountDropdown,
    setAccountDropdownOff,
  ] = useToggle(false);
  const [
    showNotificationDropdown,
    toggleNotificationDropdown,
    setNotificationDropdownOff,
  ] = useToggle(false);

  return (
    <React.Fragment>
      <NavMenu>
        <NavMenuItem>
          <MenuIcon>
            <Add />
          </MenuIcon>
        </NavMenuItem>
        <NavMenuItem>
          <Link href="/categories">
            <MenuIcon>
              <CategoriesOutline />
            </MenuIcon>
          </Link>
        </NavMenuItem>
        <NavMenuItem>
          <MenuIcon>
            <ChatBubbles />
          </MenuIcon>
        </NavMenuItem>
        <OutsideClickHandler onOutsideClick={setNotificationDropdownOff}>
          <NavMenuItem onClick={toggleNotificationDropdown}>
            <MenuIcon>
              <Notifications />
            </MenuIcon>
            <AnimatePresence>
              {showNotificationDropdown && (
                <NotificationDropdown toggle={toggleNotificationDropdown} />
              )}
            </AnimatePresence>
          </NavMenuItem>
        </OutsideClickHandler>
        <OutsideClickHandler onOutsideClick={setAccountDropdownOff}>
          <NavMenuItem onClick={toggleAccountDropdown}>
            <Avatar
              marginRight="0"
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50&q=80"
            />
            <AnimatePresence>
              {showAccountDropdown && (
                <AccountDropdown toggle={toggleAccountDropdown} />
              )}
            </AnimatePresence>
          </NavMenuItem>
        </OutsideClickHandler>
      </NavMenu>
      <AddRecipe title="Create Recipe" />
    </React.Fragment>
  );
};

export default AuthMenu;
