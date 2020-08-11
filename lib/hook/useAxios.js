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
      setData(res.data);
      if (redirectUrl) {
        Router.push(redirectUrl);
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
      setAlert(error.response.data.error, "danger");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, API };
};

export default useAxios;
