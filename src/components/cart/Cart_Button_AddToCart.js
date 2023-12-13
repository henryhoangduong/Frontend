import React from "react";
import { Button } from "reactstrap";
import { useContext } from "react";
import ShopContext from "../../context/ShopContext";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const Cart_Button_AddToCart = ({ productId = undefined,quantities=1 }) => {
  const { cartItems, setCartItems, handleUpdateQuantity, handleShow } =
    useContext(ShopContext);
  const { isLoggedIn } = useAuth();

  const findCartByID = () => {
    const result = cartItems.find(({ id }) => id == productId);
    console.log("findCartByID result: ", result);
    return result;
  };

  const getCartQuantities = () => {
    const res = cartItems.find((item) => item.id == productId);
    console.log(
      "Cart_Button_AddToCart getCartQuantities res: ",
      res,
      "productId: ",
      productId
    );
    return res.quantities;
  };

  const handleAddToCart = async () => {
    try {
      //handle cartItems
      if (findCartByID()) {
        // cartItems have item
        await handleUpdateQuantity(getCartQuantities() + quantities, productId);
      }
      // cartItems not have item yet
      else {
        console.log(
          "Cart_Button_AddToCart handleAddToCart else:",
          findCartByID()
        );
        // const test = findProductById(productId);
        // const cartUpdate= {...findProductById(),quantities:1};
        // setCartItems(productId);
        const url = "http://127.0.0.1:8000/api/create/carts";
        // const response = await axios.post(url,[{product_id}]);
        const response = {
          cart_id: 2,
          id: 2,
          image_url:
            "https://scontent.xx.fbcdn.net/v/t1.15752-9/334751607_1229076921310857_7037873925412789478_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGk4Y60zN3ihBVKGuuFBwvoabUX3D8Gi2hptRfcPwaLaIx1vonddxUainPxZQl_auvNw2VctnHihlvxnuPOSI_r&_nc_ohc=bCbmlPkFHNMAX-r_hdL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRoPRuVEpPAxmFd5zBTwOlwXyQKJObu0cHl-haGzZKcKg&oe=65858A5C",
          name: "fake data name",
          price: "fake data price",
          quantities: "fake data quantities",
        };
        // console.log("Cart_Button_AddToCart findProductById() :", [...cartItems, response]);
        setCartItems([...cartItems, response]);
      }
    } catch (error) {
      console.log("there is something wrong, try again");
    }
  };

  return (
    <>
      <Button
        id="addtocartbtn"
        onClick={() => {
          if (isLoggedIn) {
            handleAddToCart();
            handleShow();
          } else {
            handleShow();
          }
        }}
      >
        <i class="bi-cart-fill me-1"></i>
        Add to cart
      </Button>
    </>
  );
};

export default Cart_Button_AddToCart;
