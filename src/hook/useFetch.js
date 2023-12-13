import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [productsList, setproductsList] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await axios.get(url);
        const json = await res.data.data;

        setproductsList(json);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
  useEffect(() => {
    console.log(productsList);
  }, [productsList]);
  return { loading, error, productsList, setproductsList };
};

export default useFetch;
