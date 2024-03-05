const Task =require('./models/Task')
const express =require('express')

const app=express()
const tasks =require('./routes/tasks')
const connectDB=require('./db/connect')
require('dotenv').config()
const notFound =require('./middleware/error-handler')
// middleware
app.use(express.static('./public'))
app.use(express.json())
 
//routes

app.use('/api/v1/tasks',tasks)
app.use(notFound)

const port=6000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`server is running on port${port}...`))
    } catch (error ) {

    }
}
 start()