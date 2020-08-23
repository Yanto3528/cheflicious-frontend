import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import cookie from "js-cookie";
import authReducer from "./authReducer";
import authTypes from "./authTypes";

import { useAlertContext } from "../AlertContext";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialState = {
    currentUser: null,
    loading: false,
  };

  const { setAlert } = useAlertContext();

  const [state, dispatch] = useReducer(authReducer, initialState);

  const signIn = async (payload) => {
    setLoading();
    try {
      const res = await axios.post(`/api/auth/login`, payload);
      cookie.set("token", res.data.token);
      dispatch({ type: authTypes.LOGIN_USER_SUCCESS });
      loadUser();
      setAlert("Logged in successfully");
    } catch (error) {
      setAlert(error.response.data.error, "danger");
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (payload) => {
    setLoading();
    try {
      const res = await axios.post(`/api/auth/register`, payload);
      cookie.set("token", res.data.token);
      dispatch({ type: authTypes.REGISTER_USER_SUCCESS });
      loadUser();
      setAlert("Signed up successfully");
    } catch (error) {
      setAlert(error.response.data.error, "danger");
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    cookie.remove("token");
    dispatch({ type: authTypes.SIGN_OUT_USER_SUCCESS });
    setAlert("Logout successfully");
  };

  const updateUser = (data) => {
    dispatch({ type: authTypes.UPDATE_USER_SUCCESS, payload: data });
  };

  const loadUser = async () => {
    try {
      const token = cookie.get("token");
      const res = await axios.get("/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch({ type: authTypes.LOAD_USER_SUCCESS, payload: res.data });
    } catch (error) {
      setAlert(error.response.data.error, "danger");
    }
  };

  const setLoading = (value = true) => {
    dispatch({ type: authTypes.SET_LOADING, payload: value });
  };

  return (
    <AuthContext.Provider
      value={{ ...state, signIn, signUp, signOut, updateUser, loadUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
