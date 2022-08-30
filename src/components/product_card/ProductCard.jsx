import React from "react";

import "./product-card.css";

import { BsStar } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductCard = (props) => {
  const { title, imgUrl, price } = props.item;
  return (
    <div className="single__product">
      <div className="product__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>
      <div className="product__content">
        <div className="rating text-center">
          <span>
            <i>
              <BsStar className="ri-star-s-fill" />
              <BsStar className="ri-star-s-fill" />
              <BsStar className="ri-star-s-fill" />
              <BsStar className="ri-star-s-fill" />
              <BsStar className="ri-star-s-fill" />
            </i>
          </span>
        </div>
        <h6>{title}</h6>

        <div className="d-flex align-items-center justify-content-between">
          <span className="price">
            <h5>
              Price: $<span>{price}</span>
            </h5>
          </span>
          <span>
            <i>
              <AiOutlineShoppingCart className="ri-shopping-cart-line" />
            </i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
