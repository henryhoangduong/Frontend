import React from "react";
import { useContext } from "react";
import ShopContext from "../../context/ShopContext";
import CartItem from "./CartItem";
import { useAuth } from "../../context/AuthContext";
import Login from "../Login/Login";
import { Button, Offcanvas } from "react-bootstrap";

const CartOffcanvas = () => {
  const { show, handleClose, handleShow,handleCartOffcanvas,cartItems } = useContext(ShopContext);
  const {isLoggedIn} = useAuth();

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {isLoggedIn ? (
            <>
              {cartItems.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
              <div className="container ">
                <div className="row">
                  <button
                    className="col-6 m-auto  btn btn-outline-primary"
                    type="button"
                    onClick={handleCartOffcanvas}
                  >
                    <i class="bi bi-cart"></i>
                    go to checkout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <p>
              <Login /> to see what in your cart!
            </p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartOffcanvas;
