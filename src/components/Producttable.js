import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import data from "../asset/data.json";

function Producttable() {
  return (
    <div class="col-12" id="Producttable">
      <div class="card top-selling overflow-auto">
        <div class="card-body pb-0">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Preview</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Sold</th>
                <th scope="col">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {data.map((product) => (
                <tr key={product.id}>
                  <th scope="row">
                    <a href="#">
                      <img
                        class="img-fluid"
                        style={{ width: "65px" }}
                        src={product.img}
                        alt=""
                      />
                    </a>
                  </th>
                  <td>
                    <Link
                      to={`/details/${product.id}`}
                      class="text-primary fw-bold"
                    >
                      {product.title.substring(0, 70)}
                    </Link>
                  </td>
                  <td>{product.price}</td>
                  <td class="fw-bold">10</td>
                  <td>$20000</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Producttable;
