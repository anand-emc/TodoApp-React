import React from 'react'
import Shop from './Shop'
import ProductDetails from './ProductDetails'

const ProductItems = (product) => {

  console.log(product.name)

  return (
    <div>
        <Shop/>
        <h1>Displayind Product Item</h1>
        <h3>{ product.name }</h3> 
        </div>
  )
}

export default ProductItems