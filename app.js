import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { test } from "./backend/controllers/userControllers.js";


dotenv.config();
mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("si jalo pive")
})
.catch((error)=>{
    console.log("no escucha",error)
})


const app = express ()
app.use(cors())
app.listen(4001,()=>{
    console.log("si se escucha")
})

test()