const express =require('express')

 const app=express();

 app.get('/', (req,res) => {
    res.status(200).send('home page')
 })

  app.get('/about', (req,res) => {
     res.status(200).send('<h1>About page</h1>')
  })

  app.all('*',  (req,res) => {
     res.status(404).send('<h1>resource is not found</h1>')
  })

 app.listen(3000,()=>{
    console.log('surver is running')
 })

