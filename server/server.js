require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')

const PORT = process.env.PORT || 1000
const app = express()
connectDB()

app.use(express.json())
app.use(express.static("public"))
app.use(cors(corsOptions))
app.use('/api/users', require('./routers/userRouter'))
app.use('/api/posts', require('./routers/postRouter'))
app.use('/api/todos', require('./routers/todoRouter'))
app.use('/api/photos',require('./routers/photoRouter'))

mongoose.connection.once('open', () => {
    console.log("connected to DB")
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
    })
})

mongoose.connection.on('error', err => {
    console.log(err)
})


