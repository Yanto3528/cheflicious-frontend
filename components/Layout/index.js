import { useEffect, useState } from "react";
import io from "socket.io-client";
import useSWR from "swr";
import { useRecipeContext } from "../../context/RecipeContext";
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
  const [loading, setLoading] = useState(true);
  const { data: currentUser } = useSWR("/api/users/me", {
    onSuccess: () => setLoading(false),
    onError: () => setLoading(false),
  });
  const { data: notifications, mutate } = useSWR(
    currentUser ? "/api/notifications" : null
  );

  useEffect(() => {
    socket = io(process.env.NEXT_PUBLIC_BACKEND_URL);
    if (currentUser) {
      socket.emit("online", currentUser._id);
    }
    const addNotification = (notification) => {
      mutate((data) => [...data, notification]);
    };
    socket.on("getNotification", (notification) => {
      addNotification(notification);
    });
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
