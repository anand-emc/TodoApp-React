import React from 'react'
import Shop from './Shop'

const ProductItems = ({product}) => {

    console.log(product)

  return (
    <div>
        <h1>Displayind Product Item</h1>
        <section>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.decription}</p>
        </section>
    </div>
  )
}

export default ProductItems