import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import notificationReducer from "./notificationReducer";
import notificationTypes from "./notificationTypes";
import { useAlertContext } from "../AlertContext";

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const initialState = {
    notifications: [],
  };
  const { setAlert } = useAlertContext();

  const [state, dispatch] = useReducer(notificationReducer, initialState);

  const getNotifications = async () => {
    try {
      const res = await axios.get("/api/notifications");
      dispatch({
        type: notificationTypes.GET_NOTIFICATIONS,
        payload: res.data.data,
      });
    } catch (error) {
      console.log(error);
      setAlert("Cannot get notification at the moment.", "danger");
    }
  };

  const addNotification = (notification) => {
    dispatch({
      type: notificationTypes.ADD_NOTIFICATION,
      payload: notification,
    });
  };

  const readAllNotifications = async () => {
    try {
      await axios.put("/api/notifications");
      dispatch({ type: notificationTypes.READ_ALL_NOTIFICATIONS });
    } catch (error) {
      console.log(error);
      setAlert("Something went wrong when reading notifications", "danger");
    }
  };

  const deleteSingleNotification = async (id) => {
    try {
      await axios.delete(`/api/notifications/${id}`);
      dispatch({
        type: notificationTypes.DELETE_SINGLE_NOTIFICATION,
        payload: id,
      });
    } catch (error) {
      console.log(error);
      setAlert("Something went wrong when deleting notification", "danger");
    }
  };

  const deleteNotifications = async () => {
    try {
      await axios.delete("/api/notifications");
      dispatch({ type: notificationTypes.DELETE_NOTIFICATIONS });
    } catch (error) {
      console.log(error);
      setAlert("Something went wron when deleting notification", "danger");
    }
  };

  return (
    <NotificationContext.Provider
      value={{
        ...state,
        getNotifications,
        addNotification,
        readAllNotifications,
        deleteSingleNotification,
        deleteNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  return context;
};

export default NotificationProvider;
