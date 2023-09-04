import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    console.log('===================== ', process.env.MONGODB_URL)
    if(!process.env.MONGODB_URL) {
        return console.log("MONGODB_URL not found");
    }

    if(isConnected){
        return console.log("Already connected to MONGODB");
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL)

        isConnected = true;

        console.log("Connected to MONGODB!");

    } catch(error){
        console.log("Error");
    }

}