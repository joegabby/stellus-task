import {Column,CreateDateColumn,Entity,PrimaryGeneratedColumn,OneToMany,JoinColumn, UpdateDateColumn, OneToOne} from "typeorm";
import { PersonalDetails } from "./personalDetails";

@Entity({name:"publicDetails"})
export class PublicDetails {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    statementDescriptor!:string;

    @Column()
    businessWebsite!:string;

    @Column({unique:true})
    phone!:string;

    @OneToOne(()=> PersonalDetails, personalDetails=> personalDetails.id)
    @JoinColumn({ name: 'userId' })
    userId!:PersonalDetails;

    @CreateDateColumn({type:"timestamp"})
    createdAt!:Date;

    @UpdateDateColumn({type:"timestamp"})
    updatedAt!:Date;
}