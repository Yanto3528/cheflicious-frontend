import Link from "next/link";
import useSWR from "swr";
import useToggle from "../../../lib/hook/useToggle";
import { AnimatePresence } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import { useRecipeContext } from "../../../context/RecipeContext";
import { useAuthContext } from "../../../context/AuthContext";
import AccountDropdown from "../../Dropdown/AccountDropdown";
import NotificationDropdown from "../../Dropdown/NotificationDropdown";
import RecipeInput from "../../RecipeInput";

import {
  Add,
  CategoriesOutline,
  HomeOutline,
  Notifications,
} from "../../Icons";
import { AuthNavMenu, NavMenuItem, MenuIcon } from "../styles";
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

  const { currentUser } = useAuthContext();
  const { data: notifications } = useSWR("/api/notifications");
  const { showAddRecipe, toggleShowAddRecipe } = useRecipeContext();

  const hasNotification =
    notifications &&
    notifications.some((notification) => notification.read === false);

  return (
    <React.Fragment>
      <AuthNavMenu>
        <NavMenuItem>
          <Link href="/">
            <MenuIcon>
              <HomeOutline />
            </MenuIcon>
          </Link>
        </NavMenuItem>
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
        <OutsideClickHandler
          onOutsideClick={() => setNotificationDropdown(false)}
        >
          <NavMenuItem onClick={toggleNotificationDropdown}>
            <MenuIcon>
              <Notifications />
              {hasNotification && (
                <RoundedBadge>
                  {
                    notifications.filter(
                      (notification) => notification.read === false
                    ).length
                  }
                </RoundedBadge>
              )}
            </MenuIcon>
            <AnimatePresence>
              {showNotificationDropdown && <NotificationDropdown />}
            </AnimatePresence>
          </NavMenuItem>
        </OutsideClickHandler>
        <OutsideClickHandler onOutsideClick={() => setAccountDropdown(false)}>
          <NavMenuItem onClick={toggleAccountDropdown}>
            <Avatar
              marginRight="0"
              src={currentUser.avatar}
              alt={currentUser.name}
            />
            <AnimatePresence>
              {showAccountDropdown && (
                <AccountDropdown toggle={toggleAccountDropdown} />
              )}
            </AnimatePresence>
          </NavMenuItem>
        </OutsideClickHandler>
      </AuthNavMenu>
      <AnimatePresence>
        {showAddRecipe && (
          <RecipeInput titleText="Create Recipe" toggle={toggleShowAddRecipe} />
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

export default AuthMenu;
