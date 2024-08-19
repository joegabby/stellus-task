import {Column,CreateDateColumn,Entity,PrimaryGeneratedColumn, OneToMany,UpdateDateColumn, OneToOne} from "typeorm";
import { BankDetails } from "./bankDetails";
import { BusinessDetails } from "./businessDetails";
import { PublicDetails } from "./publicDetails";
@Entity({name:"personalDetails"})
export class PersonalDetails {
    @PrimaryGeneratedColumn()
    id!:PersonalDetails;

    @Column({nullable:true})
    name!:string;

    @Column({nullable:true})
    surname!:string;

    @Column({nullable:true,unique:true})
    email!:string;

    @Column({nullable:true})
    nationality!:string;

    @Column({nullable:true})
    dob!:Date;

    @Column({nullable:true})
    homeAddressLine1!:string

    @Column({nullable:true})
    homeAddressLine2!:string

    @Column({nullable:true})
    postalCode!:string;

    @Column({nullable:true,unique:true})
    phone!:string;

    @Column({nullable:true})
    NRIC!:string

    @OneToMany(() => BankDetails, (bankDetails) => bankDetails.userId)
    bankDetails!: BankDetails[];

    @OneToMany(() => BusinessDetails, (businessDetails) => businessDetails.userId)
    businessDetails!: BusinessDetails[];

    @OneToOne(() => PublicDetails, (publicDetails) => publicDetails.userId)
    publicDetails!: PublicDetails;

    @CreateDateColumn({type:"timestamp"})
    createdAt!:Date;

    @UpdateDateColumn({type:"timestamp"})
    updatedAt!:Date;

}