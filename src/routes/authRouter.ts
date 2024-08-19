import { Router} from "express";
import { authenticate } from "../controllers/authController";
const authRouter:Router= Router()

authRouter.post("/",authenticate)

export default authRouter;