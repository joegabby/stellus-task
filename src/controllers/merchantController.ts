import { Request, Response } from "express";
import  AppDataSource  from "../../ormconfig";
import { PersonalDetails } from "../entity/personalDetails";
import { createBankDetailsService, createBusinessDetailsService,createPersonalDetailsService, createPublicDetailsService, getMerchant} from "../services/merchantServices";
import { exception, success,badRequest } from "../helpers/responses";

export async function createMerchantController(req: Request, res: Response) {
    try {
        const personalDetailsResult = await createPersonalDetailsService(req, res);
        if (personalDetailsResult.error !== 0) {
            throw new Error(personalDetailsResult.body || "Failed to create personal details");
        }
        const personalDetails: PersonalDetails = personalDetailsResult.body;
        const businessDetailsResult = await createBusinessDetailsService(req, res, personalDetails);
        if (businessDetailsResult.error !== 0) {
            throw new Error(businessDetailsResult.body || "Failed to create business details");
        }
        const publicDetailsResult = await createPublicDetailsService(req, res, personalDetails);
        if (publicDetailsResult.error !== 0) {
            throw new Error(publicDetailsResult.body || "Failed to create public details");
        }
        const bankDetailsResult = await createBankDetailsService(req, res, personalDetails);
        if (bankDetailsResult.error !== 0) {
            throw new Error(bankDetailsResult.body || "Failed to create bank details");
        }

        let response = {
            personalDetails,
            businessDetails: businessDetailsResult.body,
            publicDetails: publicDetailsResult.body,
            bankDetails: bankDetailsResult.body
        }

        let result = success(response)
        res.status(result.code).send(result);

    } catch (error:any) {
        let result = exception(error.message)
        res.status(result.code).send(result);
    }
}
export async function getMerchantController(req: Request, res: Response) {
    try {
        let personalDetails = await getMerchant(req,res)
        if (personalDetails.error == 2) {
            let result = exception(personalDetails.body);
            res.status(result.code).send(result);
        }
        if (personalDetails.error == 1) {
            let result = badRequest(personalDetails.body);
            res.status(result.code).send(result);
        }
        if (personalDetails.error == 0) {
            let result = success(personalDetails.body);
            res.status(result.code).send(result);
        }
    } catch (error:any) {
        console.error(error.message);
        let result = exception(error.message);
        res.status(result.code).send(result);
    }
}
