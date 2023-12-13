import React from "react";
import Header from "../../layouts/Header";
import Producttable from "../../components/Producttable";
import Product_controller from "../../components/Product/Product_controller";
import { Outlet } from "react-router-dom";
import axios from "axios";
import "./Homepage.css";
import Pagination from "../../components/Pagination";
import Footer from "../../layouts/Footer";
import SnowEffect from "../../components/effect/SnowEffect/SnowEffect";
import Slider from "../../components/home/Slider";

function Homepage() {
  return (
    <>
      {/* SLIDER */}
      <div style={{ marginTop: "50px", position: "relative" }}>
        <SnowEffect>
          <Slider />
        </SnowEffect>
      </div>

      <div class="container">
        <div class="col">
          <Header class="row"></Header>
          <Product_controller class="row align-center"></Product_controller>
        </div>
        <Pagination></Pagination>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Homepage;
