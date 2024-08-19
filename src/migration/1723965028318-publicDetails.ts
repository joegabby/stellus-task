import { MigrationInterface, QueryRunner,Table,TableForeignKey } from "typeorm";

export class PublicDetails1723965028318 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"publicDetails",
                columns:[
                    {
                        name:"id",
                        type:"int",
                        isPrimary:true,
                        isGenerated:true,
                        generationStrategy:"increment",
                    },
                    {
                        name:"statementDescriptor",
                        type:"varchar(255)",
                        isNullable:true,
 
                    },
                    {
                        name:"businessWebsite",
                        type:"varchar(255)",   
                        isNullable:true,

                    },
                    {
                        name:"phone",
                        type:"varchar(50)",   
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
           await queryRunner.createForeignKey("publicDetails",new TableForeignKey({
            columnNames:["userId"],
            referencedColumnNames:["id"],
            referencedTableName:"personalDetails",
            onDelete:"CASCADE"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("publicDetails")
    }

}
