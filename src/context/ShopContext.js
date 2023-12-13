import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ShopContext = createContext({});

export const ShopContextProvider = ({ children }) => {


  const [cartItems, setCartItems] = useState([]);

  const [show, setShow] = React.useState(false);

  // handle form submit button on Cart offcanvas
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const nav = useNavigate();
  const handleCartOffcanvas = () => {
    handleClose();
    nav("/shoppingcarts");
  };

  //handle update quantity
  const handleUpdateQuantity = async (quantities,productId) => {
    try {
      const url = `http://127.0.0.1:8000/api/update/carts/${productId}`;
      // console.log("ShopContext handleUpdateQuantity cartUpdate quantities: ",quantities)
      const response = await axios.post(url, {quantities});


      const cartUpdate = cartItems.map((item)=>((item.id == productId)?{...item,quantities}: item))
      console.log("ShopContext handleUpdateQuantity cartItems: ",cartItems)
      setCartItems(cartUpdate);
    } catch (error) {
      console.log("Cart_Button_ChangeQuantity error");
    }
  };
  
  return (
    <ShopContext.Provider
      value={{
        cartItems,
        setCartItems,
        show,
        setShow,
        handleClose,
        handleShow,
        handleCartOffcanvas,
        handleUpdateQuantity
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
