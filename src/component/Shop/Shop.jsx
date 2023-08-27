import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";

const Shop = () => {
  const [Products, setProducts] = useState([]);
  const [card, setcart] = useState([]);

  const handelAddToCart = (product) => {
    const newCart = [...card, product];
    setcart(newCart);
  };

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid shop-containe">
      <div className="grid grid-cols-3 gap-11 m-14">
        {Products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handelAddToCart={handelAddToCart}
          />
        ))}
      </div>
      <div className=" bg-[#FF99004D] relative h-full">
        <div className=" fixed">
          <h1 className=" text-2xl font-bold m-8">Product summary</h1>
          <p className=" ml-7 text-xl mt-14">select item :{card.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
