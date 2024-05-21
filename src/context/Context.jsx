import React, { createContext, useState, useEffect, useContext } from "react";

export const ContextDataProvider = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ContextDataProvider.Provider value={{ data, loading, error }}>
      {children}
    </ContextDataProvider.Provider>
  );
};

export default ContextProvider;

export const useALLDataContext = () => {
  return useContext(ContextDataProvider);
};