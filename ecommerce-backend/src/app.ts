import express from 'express';



//IMPORTING ROUTES
import userRoute from './routes/user.js'
import { connectDB } from './utils/features.js';
import { Error } from 'mongoose';
import { errorMiddleware } from './middlewares/error.js';

const port = 3000;

connectDB();

const app = express();

//Middleware
app.use(express.json());


app.get("/", (req,res)=>{
    res.send("APU Working with /api")
})

//USING ROUTES
app.use("/api/user", userRoute);

app.use(errorMiddleware);

app.listen(port, ()=>{
    console.log(`Express is working on https://localhost:${port}`);
})
