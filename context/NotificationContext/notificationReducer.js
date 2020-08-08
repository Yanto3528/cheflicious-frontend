import notificationTypes from "./notificationTypes";

const notificationReducer = (state, action) => {
  switch (action.type) {
    case notificationTypes.GET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload,
      };
    case notificationTypes.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [action.payload, ...state.notifications],
      };
    case notificationTypes.READ_ALL_NOTIFICATIONS:
      return {
        ...state,
        notifications: state.notifications.map((notification) => ({
          ...notification,
          read: true,
        })),
      };
    case notificationTypes.DELETE_SINGLE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification._id !== action.payload
        ),
      };
    case notificationTypes.DELETE_NOTIFICATIONS:
      return {
        ...state,
        notifications: [],
      };
    default:
      return state;
  }
};

export default notificationReducer;
