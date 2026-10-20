import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Commet} from 'react-loading-indicators'
import useFetch from './custom-hook/useFetch';

const ProductList = () => {

 /* let [products,setProducts] = useState( [] )
  let [error,setError] = useState( "" )
  let [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
    fetch( " http://localhost:4000/products ",{ method : "GET" } )
    .then( ( response )=>{ 
      if( response.ok ){
        return response.json()
      }
      else{
        throw new Error("Search Proper Data")
      }
      })
    .then( (data)=> { setProducts(data) } )
    .catch( (error)=>{
      setError(error.message)
    } )
    .finally( ()=>{
      setIsLoading ( false )
    } )
  },[]) */

  let { products,error,isLoading } = useFetch("https://fakestoreapi.com/products")

  if(isLoading){
      return  <div>
        <center>
          <Commet color="#a9aaba" size="medium" text="Loading" textColor="#6c729f" />     
        </center>
    </div>
  }
  return (
    <div>
      <h1>Product List</h1>
       {products.length !== 0 && (
      <section className='products'>
        {
        products.map(product=>(
          <Card key={product.id} style={{ width: '18rem' }} className='product'>
            <center>
            <Card.Img variant="top" src= "https://placehold.co/600x400?text=Eco-Friendly+Cycling+Helmet" style={{width: "9rem",height:"12rem",}} />
            </center>
             <Card.Body>
              <Card.Title>{ product.title }</Card.Title>
                <Card.Text>
                 { product.description }
                </Card.Text>
              
              </Card.Body>
              <Card.Footer>
                <Card.Text style={{ display:"flex",justifyContent:"space-evenly",alignItems:"center" }}>
                 { product.price }
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Footer>
           </Card>
          ))
        }
      </section> )
      }
       {
        error && <p> { error } </p>
       }
    </div>
  )
}

export default ProductList