import React from "react";
import { createContext } from "react";
import useFetch from "../hook/useFetch";

const ProductContext = createContext({});

export const ProductContextProvider = ({ children }) => {
  const { loading, error, productsList, setproductsList } = useFetch(
    "http://127.0.0.1:8000/api/read/products"
  );

  return (
    <ProductContext.Provider value={{ productsList, setproductsList,loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
