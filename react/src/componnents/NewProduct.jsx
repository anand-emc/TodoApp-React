import React, { useState } from 'react'
import {Button, Grid, Paper, paperClasses, TextField, Typography} from "@mui/material"

const NewProduct = () => {

    let paperStyle = {
        width : 400,
        margin : "20px auto",
        padding : "20px"
    }

    /* [
  {
    "id": "1",
    "title": "Portable Art Supplies Kit",
    "description": "Portable Art Supplies Kit — Lightweight and travel-friendly, it fits easily in any bag.",
    "category": "toys",
    "price": 186.88,
    "discount": 14,
    "rating": 4.2,
    "stock": 149,
    "brand": "Nienow-Hirthe",
    "sku": "Q10PAHGJ",
    "images": [
      "https://placehold.co/600x400?text=Portable+Art+Supplies+Kit"
    ]
  }, */
  
    let [NewProduct,setNewProduct] = useState( {
    "title": " ",
    "description": "Portable Art Supplies Kit — Lightweight and travel-friendly, it fits easily in any bag.",
    "category": "",
    "price": 500,
    "discount": 14,
    "rating": 0,
    "stock": 149,
    "brand": "Nienow-Hirthe",
    "sku": "Q10PAHGJ",
    "images": 
      "https://placehold.co/600x400?text=Portable+Art+Supplies+Kit" 
    } )

     let handleChange = (e)=>{
      
      let {value,name} = e.target 
  
      let fieldName = name.split("rating.")[1]

      if(name.includes( "rating." )){
        setNewProduct({ 
          ...NewProduct,
          rating : {
            ...NewProduct.rating,
            [fieldName] : value
          }
       })
      }
      else{
       setNewProduct({ 
          ...NewProduct,
          [name] :value
       })
      }
     }

     let handleAdd = (e) =>{
        e.preventDefault()

        fetch( "http://localhost:4000/products",{
          method : "POST",
          headers : {
            "Contents-Type" : "application/json"
          },
          body : JSON.stringify( NewProduct )
        } )
        .then(()=>{
          alert( "Date Added succesfully " )
          setNewProduct( {
    "title": " ",
    "description": "Portable Art Supplies Kit — Lightweight and travel-friendly, it fits easily in any bag.",
    "category": "",
    "price": 500,
    "discount": 14,
    "rating": 0,
    "stock": 149,
    "brand": "Nienow-Hirthe",
    "sku": "Q10PAHGJ",
    "images": 
      "https://placehold.co/600x400?text=Portable+Art+Supplies+Kit" 
    } )
        })
     }

  return (
    <Paper elevation={20} style={paperStyle}>
       <Typography variant='h5' textAlign= "center" > Create New Product</Typography>
       <Grid component="form" style={{display:'grid',gap:"20px"}} onSubmit={handleAdd} > 
          <TextField value={NewProduct.title} name='title' label="Title" variant="outlined" onChange={handleChange} />
          <TextField value={ NewProduct.category } name='category' label="Category" variant="outlined" onChange={handleChange} />
          <Grid container spacing={2}>
              <Grid spacing={6}>
                  <TextField  value={ NewProduct.rating.rate } name='rating.rate' type='number' label="Rate" variant="outlined" onChange={handleChange} />      
              </Grid>
               <Grid spacing={6}>
                  <TextField name='rating.count' type='number' label="count" variant="outlined" onChange={handleChange} />   
              </Grid> 
          </Grid>
          <Button type='submit' variant="contained"fullWidth  >Add</Button>
       </Grid>
    </Paper>
  )
}

export default NewProduct