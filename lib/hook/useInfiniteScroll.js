import { useEffect, useState } from "react";
import axios from "axios";

const useInfiniteScroll = (url, pageNumber) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    let cancel;
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios({
          method: "GET",
          url,
          params: { page: pageNumber },
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });
        setData((prevData) => [...prevData, res.data.recipes]);
        setHasMore(res.data.nextPage);
      } catch (error) {
        if (axios.isCancel(error)) return;
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => cancel();
  }, [pageNumber]);

  return { loading, error, hasMore, data };
};

export default useInfiniteScroll;
