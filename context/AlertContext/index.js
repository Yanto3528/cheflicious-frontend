import { createContext, useContext, useReducer } from "react";
import { v4 } from "uuid";
import alertReducer from "./alertReducer";
import alertTypes from "./alertTypes";

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const initialState = {
    alerts: [],
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (message, type = "success") => {
    const id = v4();
    const alert = { id, message, type };
    dispatch({ type: alertTypes.SET_ALERT, payload: alert });

    setTimeout(
      () => dispatch({ type: alertTypes.CLEAR_ALERT, payload: id }),
      3000
    );
  };

  return (
    <AlertContext.Provider value={{ ...state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  return context;
};

export default AlertProvider;
