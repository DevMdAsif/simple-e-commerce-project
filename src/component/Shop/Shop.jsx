import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Card from "../Card/Card";
import { addToDb, getShoppingCart } from "../Fakedb/fakedb";

const Shop = () => {
  const [Products, setProducts] = useState([]);
  const [card, setcart] = useState([]);

  useEffect(()=>{
    const storedCart = getShoppingCart()
    let saveCart =[] ;
    for(const id in storedCart){
      const addedproduct =Products.find((product) =>product.id === id)
      if(addedproduct){
        const quantity = storedCart[id]
        addedproduct.quantity = quantity ;
        saveCart.push(addedproduct)
      }
    }
    setcart(saveCart)
  },[Products])

  const handelAddToCart = (product) => {
    const newCart = [...card, product];
    setcart(newCart);
    addToDb(product.id)
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
