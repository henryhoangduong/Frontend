import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../../context/AuthContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {  useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ShopContext from "../../context/ShopContext";
import GoogleAuth from "../GoogleAuth";

function Login() {
  const { setCartItems } = useContext(ShopContext);

  const navigate = useNavigate();
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const [user, setuser] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log(user);
  }, [user]);

  function handlechange(event) {
    setuser((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
    console.log("USERRRR:", user);
  }

  async function handlelogin(event) {
    event.preventDefault();
    const url = "http://127.0.0.1:8000/api/login";
    try {
      const res = await axios.post(url, user);
      console.log(res);
      localStorage.setItem("token", res.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.token}`;
      setAuthUser({ role: res.data.role });
      handleClose();
      setIsLoggedIn(true);
      if (res?.data.role === "admin") {
        navigate("/admin");
      } else {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              "http://127.0.0.1:8000/api/read/carts"
            );
            setCartItems(response.data.data);
            console.log("shopping carts response.data", response.data.data);
          } catch {
            console.log("ShopContext.js error");
          }
        };
        fetchData();

        // navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Login
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "bold" }}>
            Sign In to your LEGO® Account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="loginForm" onSubmit={handlelogin}>
            <div class="row mb-3">
              <label for="inputEmail" class="col-sm-3 col-form-label">
                Email
              </label>
              <div class="col-sm-8">
                <input
                  name="email"
                  onChange={handlechange}
                  type="email"
                  class="form-control"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputPassword" class="col-sm-3 col-form-label">
                Password
              </label>
              <div class="col-sm-8">
                <input
                  name="password"
                  onChange={handlechange}
                  type="password"
                  class="form-control"
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <div style={{ display: "flex", alignItems: "center" }}>
            <p className="mb-0">Don't have an account? </p>
            <span>&nbsp;</span>
            <Link to="/register">Sign up</Link>
          </div>
          <GoogleAuth></GoogleAuth>
          <Button type="submit" form="loginForm" variant="outline-primary">
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
