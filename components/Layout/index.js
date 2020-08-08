import { useEffect } from "react";
import axios from "axios";
import cookie from "js-cookie";
import io from "socket.io-client";
import { useRecipe } from "../../context/RecipeContext";
import { useAuth } from "../../context/AuthContext";
import { useNotification } from "../../context/NotificationContext";
import Header from "../Header";

let socket;

const Layout = ({ children }) => {
  const { showAddRecipe } = useRecipe();
  const { setUser, user } = useAuth();
  const { getNotifications, addNotification } = useNotification();

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

  return (
    <React.Fragment>
      <Header />
      {!showAddRecipe && children}
    </React.Fragment>
  );
};

export default Layout;
