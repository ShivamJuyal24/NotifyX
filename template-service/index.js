import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import templateRoutes from './routes/templateRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

//Routes
app.use("/api/templates", templateRoutes);

//mongoDb connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected to MongoDB")
    })
    .catch((err)=>{
        console.error("MongoDB connection error", err);
    })

const PORT = process.env.PORT || 5001;

app.listen(PORT, ()=>{
    console.log(`Template Service running on port ${PORT}`);
})