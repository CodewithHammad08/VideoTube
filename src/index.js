import mongoose from "mongoose";
import { DB_Name } from "./constant.js";
import connectDb from "./db/Index.js";
import dotenv from "dotenv"
import app from "./app.js";


dotenv.config({
    path: './env'
})

connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
        app.on ("error",(error) =>{
            console.log("ERROR: ", error);
            throw error
            
        } )
        
    })
})
.catch((err) =>{
    console.log("MongoDB connection failed !!!",err);
    
})