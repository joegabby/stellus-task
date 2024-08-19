import { Express, request, Request,Response } from "express";
import * as jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { success,exception, badRequest } from "../helpers/responses";
import { authenticationService } from "../services/authServices";
dotenv.config()
export async function authenticate(req:Request,res:Response) {
    try {
        let auth = await authenticationService(req,res)
        if (auth.error == 2) {
            let result = exception(auth.body);
            res.status(result.code).send(result);
        }
        if (auth.error == 1) {
            let result = badRequest(auth.body);
            res.status(result.code).send(result);
        }

        let result = success(auth.body);
        res.status(result.code).send(result);
    } 
    catch (error:any) {
        let result = exception(error.message);
        res.status(result.code).send(result);
    }
    

}