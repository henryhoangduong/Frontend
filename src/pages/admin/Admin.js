import Customercard from "../../components/Customercard";
import RevenueCard from "../../components/RevenueCard";
import Pagination from "../../components/Pagination";
import Salescard from "../../components/Salescard";
import Sidebar from "../../layouts/Sidebar";
import Header from "../../layouts/Header";
import { Link } from "react-router-dom";

import React, { useContext } from "react";
import ProductContext from "../../context/ProductContext";
import "./Admin.css";
import CreateProduct from "../../components/CreateProduct";
import Edit from "./Edit";

function Admin() {
  const { productsList, setproductsList } = useContext(ProductContext);
  console.log("Admin.js productsList: ", productsList);
  return (
    // <h1>this is admin.js</h1>

    <div>
      <Header></Header>
      <div id="card">
        <Salescard></Salescard>
        <RevenueCard></RevenueCard>
        <Customercard></Customercard>
      </div>
      <CreateProduct></CreateProduct>
      <Sidebar></Sidebar>
      <div class="col-9" id="Producttable">
        <div class="card top-selling overflow-auto">
          <div class="card-body pb-0">
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Preview</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Sold</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                {productsList.map((product) => (
                  <tr key={product.id}>
                    <th scope="row">
                      <a href="">
                        <img
                          class="img-fluid"
                          style={{ width: "65px" }}
                          src={product.image_url}
                          alt=""
                        />
                      </a>
                    </th>
                    <td>
                      <Link
                        to={`/details/${product.id}`}
                        class="text-primary fw-bold"
                      >
                        {product.name.substring(0, 70)}
                      </Link>
                    </td>
                    <td>${product.price}</td>
                    <td class="fw-bold">10</td>
                    <td>
                      <Edit
                        product={product}
                        productsList={productsList}
                        setproductsList={setproductsList}
                      ></Edit>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination></Pagination>
    </div>
  );
}

export default Admin;
