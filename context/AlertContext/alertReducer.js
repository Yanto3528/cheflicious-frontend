import alertTypes from "./alertTypes";

const alertReducer = (state, action) => {
  switch (action.type) {
    case alertTypes.SET_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, action.payload],
      };
    case alertTypes.CLEAR_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter((alert) => alert.id !== action.payload),
      };
    default:
      return state;
  }
};

export default alertReducer;
