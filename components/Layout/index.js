import { useEffect } from "react";
import axios from "axios";
import cookie from "js-cookie";
import io from "socket.io-client";
import { useRecipeContext } from "../../context/RecipeContext";
import { useAuthContext } from "../../context/AuthContext";
import { useNotificationContext } from "../../context/NotificationContext";
import RecipeInput from "../RecipeInput";
import Header from "../Header";
import { AnimatePresence } from "framer-motion";

let socket;

const Layout = ({ children }) => {
  const {
    recipe,
    showAddRecipe,
    showEditRecipe,
    toggleShowAddRecipe,
    toggleShowEditRecipe,
  } = useRecipeContext();
  const { setUser, user } = useAuthContext();
  const { getNotifications, addNotification } = useNotificationContext();

  useEffect(() => {
    if (user) {
      getNotifications();
    }
  }, [user]);

  useEffect(() => {
    socket = io(process.env.NEXT_PUBLIC_BACKEND_URL);
    if (user) {
      socket.emit("online", user._id);
    }
    socket.on("getNotification", (notification) => {
      addNotification(notification);
    });
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
    // eslint-disable-next-line
  }, [user]);

  let content;
  if (showAddRecipe) {
    content = (
      <AnimatePresence>
        <RecipeInput
          key="create-recipe"
          titleText="Create Recipe"
          toggle={toggleShowAddRecipe}
        />
      </AnimatePresence>
    );
  } else if (showEditRecipe) {
    content = (
      <AnimatePresence>
        <RecipeInput
          key="edit-recipe"
          titleText="Edit Recipe"
          toggle={toggleShowEditRecipe}
          recipe={recipe}
        />
      </AnimatePresence>
    );
  } else {
    content = children;
  }

  return (
    <React.Fragment>
      <Header />
      {content}
    </React.Fragment>
  );
};

export default Layout;
