import mongoose from "mongoose";
import { DB_Name } from "./constant";
import connectDb from "./db/Index";
import dotenv from "dotenv"

dotenv.config({
    path: './env'
})

connectDb();