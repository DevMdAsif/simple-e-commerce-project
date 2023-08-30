import React from "react";

const Card = ({card}) => {

    let totalPrice = 0 ;

    let totalShipping = 0

    for (const product of card){
        totalPrice= totalPrice + product.price ;
        totalShipping = totalShipping + product.shipping ;
    }
    const tax = totalPrice*7/100 ;

    const grandTotal = totalPrice + totalShipping + tax ;

  return (
    <div className="  bg-[#FF99004D] h-screen sticky top-0 pl-7">
      <h4 className=" text-center pt-10 text-2xl font-bold ">Product summary</h4>
      <p className="text-xl mt-12">select item :{card.length}</p>
      <p className="mt-4">Total Price : ${totalPrice}</p>
      <p className="mt-4">Total Shipping Charge : ${totalShipping}</p>
      <p className="mt-4">Tax : ${tax.toFixed(2)}</p>
      <h6 className="mt-4">Grand Total : ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Card; 
