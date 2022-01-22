import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserAddPassword1642891282013 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn(
            "users", // Table name to alter
            new TableColumn({
                name: "password",
                type: "varchar",
                isNullable: true
            }) // Column object to alter
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn(
            "users", // Table name
            "password" // Column name
        );
    }

}
