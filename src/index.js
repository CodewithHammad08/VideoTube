import mongoose from "mongoose";
import { DB_Name } from "./constant.js";
import connectDb from "./db/Index.js";
import dotenv from "dotenv"

dotenv.config({
    path: './env'
})

connectDb();