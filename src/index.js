import conectDB from './db/index.js';
import dovenv from 'dotenv'

dovenv.config({
    path:'./env'
})


conectDB()

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