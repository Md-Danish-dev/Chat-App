import express from 'express'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'

import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'

import connectToMongo from './db/connectToMongo.js'

dotenv.config();

const app=express();
const   PORT=process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser())

// app.get("/",(req,res)=>{
//     // root srver or homepage running on localhost:5000/
//     res.send("Hi am Danish ")
// })

// app.get("/api/auth/login",(req,res)=>{
//     res.send("you are in login page")
// })

// app.get("/api/auth/logout",(req,res)=>{
//     res.send("you are in logout page")
// })

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/users",userRoutes)


app.listen(PORT,()=>{
    connectToMongo();
    console.log(`server is running at ${PORT} port`)
})