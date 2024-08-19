import { Router} from "express";
import { verifyToken } from "../helpers/verifyToken";
import authRouter from "./authRouter";
import merchantRouter from "./merchantRouter";
const mainRouter:Router= Router()

mainRouter.use("/auth", authRouter)
mainRouter.use("/merchant", verifyToken, merchantRouter)
export default mainRouter;