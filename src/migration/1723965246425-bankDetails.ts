import { MigrationInterface, QueryRunner,Table,TableForeignKey } from "typeorm";

export class BankDetails1723965246425 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"bankDetails",
                columns:[
                    {
                        name:"id",
                        type:"int",
                        isPrimary:true,
                        isGenerated:true,
                        generationStrategy:"increment",
                    },
                    {
                        name:"bankName",
                        type:"varchar(255)",
                        isNullable:true,
   
                    },
                    {
                        name:"branchName",
                        type:"varchar(255)", 
                        isNullable:true,
  
                    },
                    {
                        name:"accountNumber",
                        type:"varchar(255)",   
                        isNullable:true,

                    },
                    {
                        name:"swiftCode",
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
           await queryRunner.createForeignKey("bankDetails",new TableForeignKey({
            columnNames:["userId"],
            referencedColumnNames:["id"],
            referencedTableName:"personalDetails",
            onDelete:"CASCADE"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("bankDetails")
    }

}
