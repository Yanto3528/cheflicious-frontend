import { useContext } from "react";
import Link from "next/link";
import useToggle from "../../../lib/hook/useToggle";
import { AnimatePresence } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import { AuthContext } from "../../../context/AuthContext";
import { RecipeContext } from "../../../context/RecipeContext";
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

  const { showAddRecipe, toggleShowAddRecipe } = useContext(RecipeContext);
  const { user } = useContext(AuthContext);

  return (
    <React.Fragment>
      <NavMenu>
        <NavMenuItem onClick={toggleShowAddRecipe}>
          {/* <Link href="/recipes/add"> */}
          <MenuIcon>
            <Add />
          </MenuIcon>
          {/* </Link> */}
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
