import React, { useState } from 'react'
import ProductItems from './ProductItems'

const Shop = () => {
    let [product,setproduct] = useState({name:"Iphone",price:100000,decription:"8GB RAM with 128GB"})
  return (
    <div>
        <h1>Welcome to my shop</h1>
        <ProductItems product = {product} />
    </div>
  )
}

export default Shop