import { Request, Response,NextFunction } from "express";
import jwt, { TokenExpiredError } from "jsonwebtoken"
import dotenv from "dotenv"
import { badRequest, unauthorized } from "./responses";
dotenv.config()
export async function verifyToken(req:Request, res:Response, next:NextFunction) {
    try {
        if (req.get("authorization") == null) {
            let result = badRequest("No Token in Header !!")
            res.status(result.code).send(result);
          }
          
          let token = req.get("authorization")
          if (token?.startsWith("Bearer")){
            token = token.split("Bearer ")[1]
          }

          if (jwt.verify(token!,String(process.env.JWT_SECRET))) {
            console.log("token verified successfully!!!"); 
          } else {
            console.log("Invalid or unauthourized token");
          }
         next() 
    } catch (error:any) {
        if (error instanceof TokenExpiredError) {
            console.error('Token has expired:', error.message);
            let response = unauthorized("Token Expired !!")
            res.status(response.code).send(response);
        } else {
            console.error('Token verification failed:', error.message);
            let response = unauthorized("Token verification failed!!")
            res.status(response.code).send(response);
        }
        return null;
    }
} 

