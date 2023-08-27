import React, { useEffect, useState } from 'react'
import './Shop.css'
import Product from '../Product/Product'



const Shop = () => {
  const [Products , setProducts] =useState([])


  useEffect(()=>{
      fetch('products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
  },[])
  return (
    <div className='grid shop-containe'>
        <div className='grid grid-cols-3 gap-11 m-14' >
            {
                Products.map((product)=> <Product 
                product={product} 
                key={product.id}
                />)
            }
        </div>
        <div>
        <h1>Product summary</h1>
        </div>
    </div> 
  )
}

export default Shop