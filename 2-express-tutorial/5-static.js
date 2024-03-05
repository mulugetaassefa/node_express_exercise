const express =require('express')
 const path =require('path')
 const app=express();

app.use(express.static('./public'))

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__filename,'./index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
  })
  

 app.listen(3000,()=>{
    console.log('surver is running')
 })

