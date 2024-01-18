import mongoose from "mongoose"


export const connectDB = ()=>{
    mongoose.connect("mongodb+srv://gargichaudhari0010:aAubA2icyinKLDIv@cluster0.ev5exd5.mongodb.net/?retryWrites=true&w=majority", {
        dbName:"Ecommerce_Typescript",
    }).then(c=>console.log(`DB Connected to ${c.connection.host}`)).catch(e=>console.log(e));
};


// DB PASS: aAubA2icyinKLDIv