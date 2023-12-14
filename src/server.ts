const mongoose = require('mongoose');
import app from './app'
const port = 5000;


// connect database
async function connectDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
    console.log('Database connected');
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`)
  })
  } catch (error) {
    console.log('Failed to connect to database');
  }
}
connectDB()

