import { MongoClient } from 'mongodb'
  const url = 'mongodb+srv://wonsikchoi:wonsik_choi!004@mongol.hgmmoix.mongodb.net/?retryWrites=true&w=majority&appName=mongol'
  const options = { useNewUrlParser: true }
  let connectDB
  
  if (process.env.NODE_ENV === 'development') {
    if (!global._mongo) {
      global._mongo = new MongoClient(url, options).connect()
    }
    connectDB = global._mongo
  } else {
    connectDB = new MongoClient(url, options).connect()
  }
  export { connectDB }