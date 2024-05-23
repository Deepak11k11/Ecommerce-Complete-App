import mongoose from "mongoose";

const connectDB=async () =>{
    try {
        
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected To Database");

    } catch (error) {
        console.log(error);
        
    }
}
export default connectDB;