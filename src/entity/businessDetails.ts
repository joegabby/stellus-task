import {Column,CreateDateColumn,Entity,PrimaryGeneratedColumn,ManyToOne, JoinColumn, UpdateDateColumn} from "typeorm";
import { PersonalDetails } from "./personalDetails";
@Entity({name:"businessDetails"})
export class BusinessDetails {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    industry!:string;

    @Column()
    businessWebsite!:string;

    @Column()
    productDescription!:string;

    @ManyToOne(()=> PersonalDetails, personalDetails=> personalDetails.id)
    @JoinColumn({ name: 'userId' })
    userId!:PersonalDetails;

    @CreateDateColumn({type:"timestamp"})
    createdAt!:Date;

    @UpdateDateColumn({type:"timestamp"})
    updatedAt!:Date;
}