import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import cookie from "js-cookie";
import Router from "next/router";
import authReducer from "./authReducer";
import authTypes from "./authTypes";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (cookie.get("token")) {
      getCurrentUser();
    }
  }, []);

  const signup = async (data) => {
    setLoading();
    try {
      const res = await axios.post("/api/auth/register", data);
      dispatch({
        type: authTypes.SIGN_UP_SUCCESS,
        payload: res.data,
      });
      cookie.set("token", res.data, { expires: 7 });
      await getCurrentUser();
      Router.push("/");
    } catch (error) {
      console.log(error);
      dispatch({
        type: authTypes.SIGN_UP_FAIL,
        payload: error.response.data.error,
      });
    } finally {
      setLoading(false);
    }
  };

  const signin = async (data) => {
    setLoading();
    try {
      const res = await axios.post("/api/auth/login", data);
      dispatch({
        type: authTypes.SIGN_IN_SUCCESS,
        payload: res.data,
      });
      cookie.set("token", res.data, { expires: 7 });
      await getCurrentUser();
      Router.push("/");
    } catch (error) {
      console.log(error);
      dispatch({
        type: authTypes.SIGN_IN_FAIL,
        payload: error.response.data.error,
      });
    } finally {
      setLoading(false);
    }
  };

  const getCurrentUser = async () => {
    setLoading();
    try {
      const res = await axios.get("/api/users/me");
      dispatch({ type: authTypes.GET_USER_SUCCESS, payload: res.data });
    } catch (error) {
      console.log(error);
      dispatch({
        type: authTypes.GET_USER_FAIL,
        payload: error.response.data.error,
      });
    } finally {
      setLoading(false);
    }
  };

  const setLoading = (value = true) =>
    dispatch({ type: authTypes.SET_LOADING, payload: value });

  return (
    <AuthContext.Provider value={{ ...state, signin, signup, getCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
