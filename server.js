const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
// const { connectDB } = require('./config/db.js')

//dotenv config
dotenv.config()

//
const mongoose = require('mongoose')

// require('dotenv').config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`connected to mongodb ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error in MongoDB ${error}`)
  }
}
// module.exports = connectDB
connectDB()

//rest objrct
const app = express()

//midleware
app.use(cors())
app.use(express.json())

//routes
app.use('/api/v1/portfolio', require('./routes/portfolioRoute.js'))

//port
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`server start on port ${PORT}`)
})
