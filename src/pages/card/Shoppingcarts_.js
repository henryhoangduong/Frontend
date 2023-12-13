import React from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import CartItem from "../../components/cart/CartItem";
import { useContext, useState } from "react";
import ShopContext from "../../context/ShopContext";
import axios from "axios";


function Shoppingcarts_() {
  const { cartItems, setCartItems } = useContext(ShopContext);
  // set success state for submit confirm order button
  const [success, setSuccess] = useState(false);
  
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.get(
        "http://127.0.0.1:8000/api/create/orders"
      );
      console.log("Shoppingcart_.js handleSubmit response :", response);
      setSuccess(true);
    } catch {
      console.log("Shoppingcart_.js handleSubmit response error");
    }
  };

  return (
    <>
      <Header></Header>
      {success === true ? (
        <>
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <h1>Congrat, Order has been confirm!</h1>
                    {/* row */}
                    <hr className="my-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <section className="h-100">
            <div className="container py-5">
              <div className="row d-flex justify-content-center my-4">
                <div className="col-md-8">
                  <div className="card mb-4">
                    <div className="card-header py-3">
                      <h5 className="mb-0">Cart - {cartItems.length} items</h5>
                    </div>
                    <div className="card-body">
                      {cartItems.map((item) => (
                        <CartItem item={item} key={item.id} />
                      ))}
                      {/* row */}
                      <hr className="my-4" />
                    </div>
                  </div>
                  <div className="card mb-4">
                    <div className="card-body">
                      <p>
                        <strong>Expected shipping delivery</strong>
                      </p>
                      <p className="mb-0">12.10.2020 - 14.10.2020</p>
                    </div>
                  </div>
                  <div className="card mb-4 mb-lg-0">
                    <div className="card-body">
                      <p>
                        <strong>We accept</strong>
                      </p>
                      <img
                        className="me-2"
                        width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                        alt="Visa"
                      />
                      <img
                        className="me-2"
                        width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                        alt="American Express"
                      />
                      <img
                        className="me-2"
                        width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                        alt="Mastercard"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4">
                    <div className="card-header py-3">
                      <h5 className="mb-0">Summary</h5>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                          Products
                          <span>$53.98</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          Shipping
                          <span>Gratis</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                          <div>
                            <strong>Total amount</strong>
                            <strong>
                              <p className="mb-0">(including VAT)</p>
                            </strong>
                          </div>
                          <span>
                            <strong>$53.98</strong>
                          </span>
                        </li>
                      </ul>

                      <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block"
                        onClick={(event) => handleSubmit(event)}
                      >
                        Confirm order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer></Footer>
    </>
  );
}

export default Shoppingcarts_;
