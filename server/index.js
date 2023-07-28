// const express = require('express')
// const colors = require('colors')
import express from "express"
import colors from 'colors'
import mongoose from "mongoose"
import dotenv from "dotenv"
import morgan from "morgan"
import helmet from "helmet"
import path from "path"
import { fileURLToPath } from "url"
import bodyParser from "body-parser"
import cors from "cors"
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'




// rest object
const app = express()  

// Configurations
const __filename = fileURLToPath(import.meta.url) 
const __dirname = path.dirname(__filename)
dotenv.config()

// middlewares
app.use(cors())

app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));

app.use(morgan('dev'))
app.use(bodyParser.json({limit: "30mb",extended :true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());


// routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes); 






// rest api
app.get('/',(req,res)=> 
{
    // res.send({
    //     message:"<h1>Welcome to ecommerce app</h1>"

    // })
    res.send('<h1> Welcome to ecommerce app</h1>');
})

// PORT--> Enviromental variable

const PORT = process.env.PORT || 8080


// Database Connectivity
mongoose.connect(process.env.MONGO_URL,
    {
      useNewUrlParser: true,
     //useFindAndModify: false, 
      useUnifiedTopology: true
    }
  ).then(()=>{

    app.listen(PORT,()=> {console.log(`Server Port:${PORT},Database Connected`.bgCyan.white)
   // console.log(`${mongoose.connect(process.env.MONGO_URL).connection.host}`.bgMagenta.white)


}) 


/*Manually Injecting Data*/

    // User.insertMany(users);
     //Post.insertMany(posts); 

  }).catch((error)=> console.log(`Database not connected ${error}`));
  

