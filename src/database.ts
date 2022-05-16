import mongoose
//{ ConnectionOptions } 
from "mongoose"

import config from './config'

(async () =>{
   try {
/*
       const mongooseOptions: ConnectionOptions ={
           user:config.MONGO_USER,
           password: config.MONGO_PASSWORD

       }

       */
    const db = await mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.ekt6n.mongodb.net/lipigas?retryWrites=true&w=majority`);
    console.log('Database is connected to: ', db.connection.name  )
   } catch (error) {
       console.error(error)
   }
}

)()
