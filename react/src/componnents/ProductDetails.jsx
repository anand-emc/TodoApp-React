import React from 'react'

function ProductDetails({nick,cost,info}) {
  return (
    <section>
            <h3>{nick}</h3>
            <p>{cost}</p>
            <p>{info}</p>
    </section>
  )
}

export default ProductDetails