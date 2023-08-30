import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Card from "../Card/Card";

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
      <div>
        <Card card={card}/>
      </div>
    </div>
  );
};

export default Shop;
