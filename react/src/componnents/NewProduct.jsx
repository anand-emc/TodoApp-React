import React from 'react'
import {Grid, Paper, paperClasses, TextField, Typography} from "@mui/material"

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

  return (
    <Paper elevation={20} style={paperStyle}>
       <Typography variant='h5' textAlign= "center" > Create New Product</Typography>
       <Grid component="form">
          <TextField name='title' label="Title" variant="outlined" />
          <TextField name='category' label="Category" variant="outlined" />
          <Grid container spacing={2}>
              <Grid spacing={6}>
                  <TextField name='rating.rate' type='number' label="Rate" variant="outlined" />      
              </Grid>
               <Grid spacing={6}>
                  <TextField name='rating.count' type='number' label="count" variant="outlined" />      
              </Grid> 
          </Grid>
            <Button variant="contained">Add</Button>
       </Grid>
    </Paper>
  )
}

export default NewProduct