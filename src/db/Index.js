import mongoose, { Connection } from "mongoose";
import { DB_Name } from "../constant";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`\n Mongodb Connected!! DB Host: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MongoDB Connection Error", error)
        process.exit(1)
    }
}
export default connectDb;