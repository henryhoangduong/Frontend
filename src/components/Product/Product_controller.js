import React from "react";
import data from "../../asset/data.json";
import { useContext } from "react";
import ProductContext from "../../context/ProductContext";
import Product_item from "./Product_item";

function Product_controller() {
  const {productsList, loading,error} = useContext(ProductContext);
  if (loading) return <p>loading</p>;

  if (error) return <p>error</p>;
  return (
    <div class="row">
      {productsList.map((product) => (
        <Product_item key={product.id} product={product}/>
      ))}
    </div>
  );
}

export default Product_controller;
