const express =require('express')
 const path =require('path')
 const app=express();

  const { products} =require('./data.js')
//select specific product
  app.get('/api/product', (req,res) =>{
     const newProducts =products.map((items) => {
      const {id,name,image}=items;
      return {id,name,image}
     })
  res.json(newProducts)
  })  

  //find single product
  app.get('/api/product/:productID', (req,res) =>{
   const { productID } = req.params
     
   const singleProduct = products.find(
      (product) =>product.id ===Number(productID))
      if(!singleProduct) {
         return res.status(404).send('product does not exist')
      }
      
       res.json(singleProduct)

  })

 app.listen(3000,()=>{
    console.log('surver is running')
 })

