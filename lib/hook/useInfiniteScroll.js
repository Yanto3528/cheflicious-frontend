import { useEffect, useState } from "react";
import axios from "axios";

const useInfiniteScroll = (initialData, url, pageNumber, nextPage = false) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(initialData);
  const [hasMore, setHasMore] = useState(nextPage);

  useEffect(() => {
    if (initialData.length !== 0) {
      setData(initialData);
    }
  }, [initialData]);

  useEffect(() => {
    if (pageNumber === 1 && hasMore !== nextPage) {
      setHasMore(nextPage);
    }
  }, [nextPage]);

  useEffect(() => {
    let cancel;
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await axios({
          method: "GET",
          url,
          params: { page: pageNumber },
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });
        setData((prevData) => [...prevData, ...res.data.data]);
        setHasMore(res.data.nextPage);
      } catch (error) {
        if (axios.isCancel(error)) return;
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    if (data.length === 0 || (pageNumber > 1 && hasMore)) {
      fetchData();
    }
    return () => {
      if (typeof cancel === "function") cancel();
    };
  }, [pageNumber]);

  return { loading, error, hasMore, data };
};

export default useInfiniteScroll;
