import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import cookie from "js-cookie";
import Router from "next/router";
import authReducer from "./authReducer";
import authTypes from "./authTypes";
import { useAlertContext } from "../AlertContext";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { setAlert } = useAlertContext();

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
      cookie.set("token", res.data.token, { expires: 7 });
      await getCurrentUser();
      Router.push("/");
    } catch (error) {
      console.log(error);
      dispatch({
        type: authTypes.SIGN_UP_FAIL,
        payload: error.response.data.error,
      });
      setAlert(error.response.data.error, "danger");
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
      cookie.set("token", res.data.token, { expires: 7 });
      await getCurrentUser();
      Router.push("/");
    } catch (error) {
      console.log(error);
      dispatch({
        type: authTypes.SIGN_IN_FAIL,
        payload: error.response.data.error,
      });
      setAlert(error.response.data.error, "danger");
    } finally {
      setLoading(false);
    }
  };

  const signout = () => {
    cookie.remove("token");
    Router.push("/signin");
  };

  const getCurrentUser = async () => {
    setLoading();
    try {
      const token = cookie.get("token");
      const res = await axios.get("/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
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
  const setUser = (user) => {
    dispatch({ type: authTypes.SET_USER, payload: user });
  };

  const followUser = async (id) => {
    setLoading();
    try {
      const res = await axios.put(`/api/users/${id}/follow`);
      dispatch({
        type: authTypes.FOLLOW_USER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: authTypes.FOLLOW_USER_FAIL,
        payload: error.response.data.error,
      });
      setAlert(error.response.data.error, "danger");
    } finally {
      setLoading(false);
    }
  };

  const unFollowUser = async (id) => {
    try {
      setLoading();
      const res = await axios.put(`/api/users/${id}/unfollow`);
      dispatch({
        type: authTypes.UNFOLLOW_USER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: authTypes.UNFOLLOW_USER_FAIL,
        payload: error.response.data.error,
      });
      setAlert(error.response.data.error, "danger");
    } finally {
      setLoading(false);
    }
  };

  const setLoading = (value = true) =>
    dispatch({ type: authTypes.SET_LOADING, payload: value });

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signin,
        signup,
        signout,
        getCurrentUser,
        setUser,
        followUser,
        unFollowUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};

export default AuthProvider;
