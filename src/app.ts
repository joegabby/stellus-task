import express ,{ Application } from "express";
import { connectDB } from "./config/db";
import dotenv from "dotenv"
import mainRouter from "./routes/mainRouter";
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from '../swaggerConfig';


const app:Application = express()

const swaggerSpec = swaggerJsdoc(swaggerConfig);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
dotenv.config()
connectDB()
const port = process.env.PORT || 7000
app.use(express.json())
app.use("/api/v1", mainRouter)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})