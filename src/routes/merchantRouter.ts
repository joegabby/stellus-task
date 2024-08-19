import { Router} from "express";
import { createMerchantController, getMerchantController } from "../controllers/merchantController";
const merchantRouter:Router= Router()

merchantRouter.post("/", createMerchantController)
merchantRouter.get("/:userId", getMerchantController)

export default merchantRouter;