import { useState } from "react";
import axios from "axios";

const useAxios = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API = async (method, url, formData, params) => {
    try {
      setLoading(true);
      const res = await axios({
        method,
        url,
        params,
        data: formData,
      });
      setData(res.data);
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, API };
};

export default useAxios;
