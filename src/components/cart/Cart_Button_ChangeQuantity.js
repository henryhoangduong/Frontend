import React from "react";
import { useContext } from "react";
import ShopContext from "../../context/ShopContext";
import axios from "axios";


const Cart_Button_ChangeQuantity = ({ productCart }) => {
  const { cartItems, setCartItems,handleUpdateQuantity } = useContext(ShopContext);

  const QuantitiesOption = [];
  for (let i=1; i<=10;i++){
    QuantitiesOption.push(i);
  }


  return (
    <>

      <select
        name="quantities"
        className={"form-select"}
        id="quantities"
        onChange={(e) => handleUpdateQuantity(parseInt(e.target.value),productCart.id)}
        value={productCart.quantities}
      >

        {QuantitiesOption.map((num) => productCart.quantities===num?(
          <option key={num} value={num} selected>
            {num}
          </option>
        ):(
          <option key={num} value={num} >
          {num}
        </option>
        ))}


      </select>


    </>
  );
};

export default Cart_Button_ChangeQuantity;
