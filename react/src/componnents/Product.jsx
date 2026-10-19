import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Product = () => {

    let [count,setCount] = useState(0)

    useEffect( ()=>{
        console.log("run after every render")
    },[  ] )

    console.log("Intial renter")

  return (
    <div>

        <h1>Product - {count}</h1>
        <Button variant="primary" onClick={()=>setCount( count+1 )}>Increase</Button>
        <Link to="list">list</Link>
        <Link to="delails">delails</Link>
        <Outlet/>
    </div>
  )
}

export default Product