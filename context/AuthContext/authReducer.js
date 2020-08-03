import cookie from "js-cookie";
import authTypes from "./authTypes";

const authReducer = (state, action) => {
  switch (action.type) {
    case authTypes.SIGN_UP_SUCCESS:
    case authTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case authTypes.SIGN_UP_FAIL:
    case authTypes.SIGN_IN_FAIL:
    case authTypes.GET_USER_FAIL:
      cookie.remove("token");
      return {
        ...state,
        token: null,
        error: action.payload,
        isAuthenticated: false,
        user: null,
      };
    case authTypes.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case authTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
  }
};

export default authReducer;