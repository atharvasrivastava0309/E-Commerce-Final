import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img
        src={
          product.images && product.images.length > 0 && product.images[0].url
            ? product.images[0].url
            : "https://via.placeholder.com/150"
        }
        alt={product.name}
      />
      <p title={product.name}>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {product.numOfReviews === 1 ? "1 Review" : `${product.numOfReviews} Reviews`}
        </span>
      </div>
      <span>{`from ₹${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;
