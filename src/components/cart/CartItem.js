import React from "react";
import Cart_Button_ChangeQuantity from "./Cart_Button_ChangeQuantity"
import { useContext } from "react";
import ShopContext from "../../context/ShopContext";
import GetCurrentUrl from "../../utils/GetCurrentUrl";

const CartItem = ({ item }) => {
  return (

    <div className="row mt-4">
      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
        <div data-mdb-ripple-color="light">
          <img
            src={item.image_url}
            className="w-100"
            alt={item.name}
          />
          <a href="#!">
            <div
              className="mask"
              style={{
                backgroundcolor: "rgba(251, 251, 251, 0.2)",
              }}
            ></div>
          </a>
        </div>
      </div>

      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
        <p>
          <strong>{item.name}</strong>
        </p>

        <button
          type="button"
          className="btn btn-primary btn-sm me-1 mb-2"
          data-mdb-toggle="tooltip"
          title="Remove item"
        >
          <i className="fas fa-trash"></i>
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm mb-2"
          data-mdb-toggle="tooltip"
          title="Move to the wish list"
        >
          <i className="fas fa-heart"></i>
        </button>
      </div>

      <div className="col-lg-3 col-sm-3 mb-4 mb-lg-0 w-auto" >
        <div className="d-flex my-4 " >
          <Cart_Button_ChangeQuantity productCart={item}/>
        </div>

        <p className="text-start text-md-center">
          <strong>{item.quantities*item.price} vnd</strong>
        </p>
      </div>
    </div>
  );
};

export default CartItem;
