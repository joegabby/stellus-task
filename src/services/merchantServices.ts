import { Request,Response } from "express";
import  AppDataSource  from "../../ormconfig";
import { PersonalDetails } from "../entity/personalDetails";
import { BusinessDetails } from "../entity/businessDetails";
import { PublicDetails } from "../entity/publicDetails";
import { BankDetails } from "../entity/bankDetails";

export async function createPersonalDetailsService(req:Request,res:Response) {
    try {
        const personalDetailsRepository = AppDataSource.getRepository(PersonalDetails);
        const personalDetails:PersonalDetails = new PersonalDetails();
        personalDetails.name = req.body.name;
        personalDetails.surname = req.body.surname;
        personalDetails.email = req.body.email;
        personalDetails.nationality = req.body.nationality;
        personalDetails.dob = req.body.dob;
        personalDetails.homeAddressLine1 = req.body.homeAddressLine1;
        personalDetails.homeAddressLine2 = req.body.homeAddressLine2;
        personalDetails.postalCode = req.body.postalCode;
        personalDetails.phone = req.body.phone;
        personalDetails.NRIC = req.body.NRIC;
        let result = await personalDetailsRepository.save(personalDetails);  

        if (result){
            return {
                error :0,
                body: result
            }
          }
          return { error: 1, body: "Failed to create personal details" };
    } catch (e:any) {
        return {
            error :2,
            body: e.message
        }
    }
}

export async function createBusinessDetailsService(req:Request,res:Response,personalDetails:PersonalDetails) {
    try {
        const businessDetailsEntity = AppDataSource.getRepository(BusinessDetails)
        const businessDetails = new BusinessDetails()
        businessDetails.industry = req.body.industry;
        businessDetails.businessWebsite = req.body.businessWebsite;
        businessDetails.productDescription = req.body.productDescription;
        businessDetails.userId = personalDetails.id;
        let result = await businessDetailsEntity.save(businessDetails)
        if (result){
            return {
                error :0,
                body: result
            }
          }
          return { error: 1, body: "Failed to create business details" };
    } catch (e:any) {
        return {
            error :2,
            body: e.message
        }
    }
}

export async function createPublicDetailsService(req:Request,res:Response,personalDetails:PersonalDetails) {
    try {
        const publicDetailsEntity = AppDataSource.getRepository(PublicDetails)
        const publicDetails = new PublicDetails()
        publicDetails.statementDescriptor = req.body.statementDescriptor;
        publicDetails.businessWebsite = req.body.businessWebsite;
        publicDetails.phone = req.body.public_phone;
        publicDetails.userId = personalDetails.id
        let result = await publicDetailsEntity.save(publicDetails)
        if (result){
            return {
                error :0,
                body: result
            }
          }
          return { error: 1, body: "Failed to create public details" };
        } catch (e:any) {
            return {
                error :2,
                body: e.message
            }
    }
}
export async function createBankDetailsService(req:Request,res:Response,personalDetails:PersonalDetails) {
    try {
       const bankDetailsEntity = AppDataSource.getRepository(BankDetails)
       const bankDetails = new BankDetails()
       bankDetails.bankName = req.body.bankName;
       bankDetails.branchName = req.body.branchName;
       bankDetails.accountNumber = req.body.accountNumber;
       bankDetails.swiftCode = req.body.swiftCode;
       bankDetails.userId = personalDetails.id
       let result = await bankDetailsEntity.save(bankDetails)
       if (result){
            return {
                error :0,
                body: result
            }
        }
      return { error: 1, body: "Failed to create bank details" };
    } catch (e:any) {
        return {
            error :2,
            body: e.message
        }
}
}

export async function getMerchant(req:Request,res:Response) {
    try {
        const personalDetailsEntity = AppDataSource.getRepository(PersonalDetails)
        let id:any= req.params.userId  
        let result = await personalDetailsEntity.findOne(
        {
            where:{id},
            relations: ["businessDetails","publicDetails","bankDetails"],
        })
        if (result != null){
            return {
                error :0,
                body: result
            }
          }
          return { error: 1, body: "Sorry, no merchant found" };
    } 
    catch (e:any) {
        return {
            error :2,
            body: e.message
        }
    }

}