import { useState } from "react";
import Router from "next/router";
import axios from "axios";
import { useAlertContext } from "../../context/AlertContext";

const useAxios = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setAlert } = useAlertContext();

  const API = async (method, url, formData, redirectUrl) => {
    try {
      setLoading(true);
      const res = await axios({
        method,
        url,
        data: formData,
      });
      if (redirectUrl) {
        Router.push(redirectUrl);
      }
      return res.data;
    } catch (error) {
      setError(error.response.data.error);
      setAlert(error.response.data.error, "danger");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, API };
};

export default useAxios;
