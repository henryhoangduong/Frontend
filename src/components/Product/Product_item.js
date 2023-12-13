import React from 'react'
import { Link } from "react-router-dom";

const Product_item = ({product}) => {
  return (
    <div key={product.id} class="col-sm-3" style={{ height: "540px" }}>
      <div class="card" style={{ width: "18rem" }}>
        <img
          class="card-img-top"
          src={product.image_url}
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{product.name.substring(0, 70)}</h5>
          <h5>Price: {product.price}</h5>
          <p class="card-text">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s
          </p>
          <Link to={`details/${product.id}`} class="btn btn-primary">
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product_item