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
    setAccountDropdown,
  ] = useToggle(false);
  const [
    showNotificationDropdown,
    toggleNotificationDropdown,
    setNotificationDropdown,
  ] = useToggle(false);

  const [showAddRecipe, toggleShowAddRecipe] = useToggle(false);

  return (
    <React.Fragment>
      <NavMenu>
        <NavMenuItem onClick={toggleShowAddRecipe}>
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
        <OutsideClickHandler
          onOutsideClick={() => setNotificationDropdown(false)}
        >
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
        <OutsideClickHandler onOutsideClick={() => setAccountDropdown(false)}>
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
      <AnimatePresence>
        {showAddRecipe && (
          <AddRecipe titleText="Create Recipe" toggle={toggleShowAddRecipe} />
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

export default AuthMenu;