import { useState, useEffect } from "react";

const useShopData = () => {
  const [shopData, setShopData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=1&limit=3")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setShopData(response))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return { shopData, error, loading };
};

export default useShopData;
