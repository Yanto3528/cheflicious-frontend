import useToggle from "../../../lib/hook/useToggle";
import { AnimatePresence } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import AccountDropdown from "../../Dropdown/AccountDropdown";
import {
  Add,
  CategoriesOutline,
  ChatBubbles,
  Notifications,
} from "../../Icons";
import Avatar from "../../../styles/shared/Avatar";
import { NavMenu, NavMenuItem, MenuIcon } from "../styles";

const AuthMenu = () => {
  const [showAccountDropdown, toggleAccountDropdown] = useToggle(false);

  console.log(showAccountDropdown);

  return (
    <NavMenu>
      <NavMenuItem>
        <MenuIcon>
          <Add />
        </MenuIcon>
      </NavMenuItem>
      <NavMenuItem>
        <MenuIcon>
          <CategoriesOutline />
        </MenuIcon>
      </NavMenuItem>
      <NavMenuItem>
        <MenuIcon>
          <ChatBubbles />
        </MenuIcon>
      </NavMenuItem>
      <NavMenuItem>
        <MenuIcon>
          <Notifications />
        </MenuIcon>
      </NavMenuItem>
      <OutsideClickHandler onOutsideClick={toggleAccountDropdown}>
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
  );
};

export default AuthMenu;
