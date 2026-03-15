import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express();

const limit = "20kb"

// cors allows the backend to talk to the frontend
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

// Allows the back end to talk to the front end
app.use(express.json({
    limit:limit
}));

// Allows to accept filse
app.use(express.static("public"))

// This reads cookies from requests.
app.use(cookieParser())

// URL Encoded Parser
app.use(express.urlencoded({
    extended:true,
    limit:limit
}))

/*
 1️⃣ req — Request Object
 req represents the HTTP request sent by the client.
 Internally it extends the Node.js IncomingMessage object.

2️⃣ res — Response Object
res represents the server response back to the client.
Internally it extends Node.js ServerResponse.
This object sends data back to the browser.

3️⃣ next — Control Transfer Function
next moves the request to the next middleware in the chain.
err — Error Object
err only appears in error-handling middleware.

 app.get('/route',(err,req,res,next)=>{res.send("Hello")})
*/

export default app

//  npm i cookie-parser 
//  npm i cors