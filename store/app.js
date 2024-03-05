require('dotenv').config()
// async errors


const express = require('express')
const app =express();

const notFoundMiddleware =require('./middleware/not-found')

const errorHandlerMiddleware = require('./middleware/error-handler')
const productsRouter =require('./routes/products')


// middleware
const connectedDB =require('./db/connect')

app.use(express.json)

// routes
app.get('/', (req, res) => {
    res.send('<h1>Store API </h1><a href="/api/v1/products">products routes </h1>')
})

app.use('/api/v1/products', productsRouter)
// product route

 app.use(notFoundMiddleware)
 app.use(errorHandlerMiddleware)

const port = 5500

app.get('/home', (req,res) => {
    res.send('home page')
})

const start = async () => {
    try {
        // connectDB
        await connectedDB(process.env.MONGO_URL)
        app.listen(port , console.log(`Server is listening port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()

