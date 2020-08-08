import Link from "next/link";
import useToggle from "../../../lib/hook/useToggle";
import { AnimatePresence } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import { useAuth } from "../../../context/AuthContext";
import { useRecipe } from "../../../context/RecipeContext";
import { useNotification } from "../../../context/NotificationContext";
import AccountDropdown from "../../Dropdown/AccountDropdown";
import NotificationDropdown from "../../Dropdown/NotificationDropdown";
import AddRecipe from "../../AddRecipe";

import {
  Add,
  CategoriesOutline,
  ChatBubbles,
  Notifications,
} from "../../Icons";
import { NavMenu, NavMenuItem, MenuIcon } from "../styles";
import Avatar from "../../../styles/shared/Avatar";
import { RoundedBadge } from "../../../styles/shared/Badge";

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

  const { showAddRecipe, toggleShowAddRecipe } = useRecipe();
  const { user } = useAuth();
  const { notifications } = useNotification();

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
              <RoundedBadge>
                {
                  notifications.filter(
                    (notification) => notification.read === false
                  ).length
                }
              </RoundedBadge>
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
            <Avatar marginRight="0" src={user.avatar} alt={user.name} />
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
