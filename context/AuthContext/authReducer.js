import authTypes from "./authTypes";

const authReducer = (state, action) => {
  switch (action.type) {
    case authTypes.LOAD_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    case authTypes.LOGIN_USER_SUCCESS:
    case authTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case authTypes.SIGN_OUT_USER_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case authTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case authTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
