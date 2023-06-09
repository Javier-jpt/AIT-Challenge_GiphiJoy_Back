const express = require('express')
const cors = require('cors')
const app = express()

// Routes
const gifRouter = require('./router/gifRouter')

app.use(express.json())
app.use(cors({
  origin: ['http://localhost:3000']
}))



app.use("/api", gifRouter)

module.exports = app;