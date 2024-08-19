import { Express, Request,Response} from "express";
import jwt from "jsonwebtoken"

export async function authenticationService(req:Request,res:Response) {
    try {
        let payload = req.body
        let token = jwt.sign(payload,String(process.env.JWT_SECRET),{
        expiresIn: "60m",
      })
      if (token){
        return {
            error :0,
            body: {
                token,
                expireAt:"60m"
            }
        }
      }
      return { error: 1, body: "Sorry, could not create authentication token. Try again!!" };
    } catch (e:any) {
        return {
            error :2,
            body: e.message
        }
    }
    
    
    
}