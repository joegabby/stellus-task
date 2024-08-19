import {Column,CreateDateColumn,Entity,ManyToOne,PrimaryGeneratedColumn,JoinColumn, UpdateDateColumn} from "typeorm";
import { PersonalDetails } from "./personalDetails";

@Entity({name:"bankDetails"})
export class BankDetails {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    bankName!:string;

    @Column()
    branchName!:string;

    @Column({unique:true})
    accountNumber!:string;

    @Column()
    swiftCode!:string;

    @ManyToOne(()=> PersonalDetails, personalDetails=> personalDetails.id)
    @JoinColumn({ name: 'userId' })
    userId!:PersonalDetails;

    @CreateDateColumn({type:"timestamp"})
    createdAt!:Date;

    @UpdateDateColumn({type:"timestamp"})
    updatedAt!:Date;
}