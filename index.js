const express = require('express')
const cors = require('cors')
const { connection } = require('./db')
const authRoutes = require('./routes/authRoutes');
const booksRoutes = require('./routes/booksRoutes');
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', authRoutes);
app.use('/', booksRoutes);

app.listen(process.env.PORT, async () => {
  try {
    await connection
    console.log('db is connected')
  } catch (error) {
    console.log(error.message)
  }
  console.log('port is running')
})