import { useEffect } from "react";
import io from "socket.io-client";
import cookie from "js-cookie";
import useSWR from "swr";
import { useRecipeContext } from "../../context/RecipeContext";
import RecipeInput from "../RecipeInput";
import Header from "../Header";
import { AnimatePresence } from "framer-motion";
import { useAuthContext } from "../../context/AuthContext";

let socket;

const Layout = ({ children }) => {
  const {
    recipe,
    showAddRecipe,
    showEditRecipe,
    toggleShowAddRecipe,
    toggleShowEditRecipe,
  } = useRecipeContext();
  const { currentUser, loading, loadUser } = useAuthContext();
  const { data: notifications, mutate } = useSWR(
    currentUser ? "/api/notifications" : null
  );

  useEffect(() => {
    if (cookie.get("token")) {
      loadUser();
    }
  }, []);

  useEffect(() => {
    socket = io(process.env.NEXT_PUBLIC_BACKEND_URL);
    const addNotification = (notification) => {
      mutate((data) => [...data, notification]);
      mutate();
    };
    if (currentUser) {
      socket.emit("online", currentUser._id);
      socket.on("getNotification", (notification) => {
        addNotification(notification);
      });
    }
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
    // eslint-disable-next-line
  }, [currentUser]);

  if (loading) {
    return null;
  }

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
          isEdit
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
