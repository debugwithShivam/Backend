import conectDB from './db/index.js';
import dovenv from 'dotenv'
import { app } from './app.js';
dovenv.config({
    path:'./env'
})


conectDB().then(()=>{

     app.on('error',(error)=>{
    console.log("ERROR:", error);
    throw error
   });

    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running at : ${process.env.PORT}`)
    })
}).catch((err)=>{console.error("MONGO db connection failed !!", err)})

/*
import express from "express"
import dotenv  from 'dotenv'
const app = express()

;( async ()=> {
try{
   await mongoose.connect(`${process.env.MONGODB_UR}/${DB_NAME}`);

   app.on('error',(error)=>{
    console.log("ERROR:", error);
    throw error
   });

   app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${process.env.PORT}`)
   });

}catch(error){
    console.error("ERROR",error)
    throw error
}
})();

*/