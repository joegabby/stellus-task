import { MigrationInterface, QueryRunner,Table } from "typeorm";

export class PersonalDetails1723961267046 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.createTable(
        new Table({
            name:"personalDetails",
            columns:[
                {
                    name:"id",
                    type:"int",
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:"increment",
                },
                {
                    name:"name",
                    isNullable:true,
                    type:"varchar(255)",

                },
                {
                    name:"surname",
                    type:"varchar(255)",
                    isNullable:true,

                },
                {
                    name:"email",
                    type:"varchar(255)",
                    isNullable:true,
                },
                {
                    name:"nationality",
                    type:"varchar(255)",
                    isNullable:true,
                },
                {
                    name:"dob",
                    type:"date",
                    isNullable:true,
                },
                {
                    name:"homeAddressLine1",
                    type:"varchar(255)",
                    isNullable:true,
                },
                {
                    name:"homeAddressLine2",
                    type:"varchar(255)",
                    isNullable:true,
                },
                {
                    name:"postalCode",
                    type:"varchar(50)",
                    isNullable:true,
                },
                {
                    name:"phone",
                    type:"varchar(50)",
                    isNullable:true,
                },
                {
                    name:"NRIC",
                    type:"varchar(255)",
                    isNullable:true,
                },
                {
                    name:"createdAt",
                    type:"date",
                    isNullable:true,
                },
                {
                    name:"updatedAt",
                    type:"date",
                    isNullable:true,
                }
            ]
        }),
        true
       )
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("personalDetails")
    }

}
