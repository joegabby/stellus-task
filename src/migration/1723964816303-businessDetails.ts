import { MigrationInterface, QueryRunner,Table, TableForeignKey } from "typeorm";
import { PersonalDetails1723961267046 } from "./1723961267046-personalDetails";
export class BusinessDetails1723964816303 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"businessDetails",
                columns:[
                    {
                        name:"id",
                        type:"int",
                        isPrimary:true,
                        isGenerated:true,
                        generationStrategy:"increment",
                    },
                    {
                        name:"industry",
                        type:"varchar(255)",
                        isNullable:true,
    
                    },
                    {
                        name:"businessWebsite",
                        type:"varchar(255)",
                        isNullable:true,
                    },
                    {
                        name:"productDescription",
                        type:"varchar(255)",
                        isNullable:true,
                    },
                    {
                        name:"userId",
                        type:"int",
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

        await queryRunner.createForeignKey("businessDetails",new TableForeignKey({
            columnNames:["userId"],
            referencedColumnNames:["id"],
            referencedTableName:"personalDetails",
            onDelete:"CASCADE"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("businessDetails")
    }

}
