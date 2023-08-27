import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { price, name, img, ratings, seller } = props.product;

  const handelAddToCart = props.handelAddToCart;

  return (
    <div className="w-[305px] h-[508px] border-solid border-stone-300 border-2 rounded relative">
      <img className="w-[286px] max-h-[286px] m-2" src={img} alt="" />
      <div className=" ml-4">
        <h6 className=" text-xl mt-3 font-normal">{name}</h6>
        <p className=" mt-2">Price : ${price}</p>
        <p>Manufactuer : {seller}</p>
      </div>
      <button
        className=" w-[302px] h-[48px] bg-[#FFE0B3] border-solid border-stone-300 border-2 rounded-b-lg absolute bottom-0 hover:bg-orange-300"
        onClick={() => handelAddToCart(props.product)}
      >
        Add to Cart <FontAwesomeIcon icon={faShoppingCart} />{" "}
      </button>
    </div>
  );
};

export default Product;
