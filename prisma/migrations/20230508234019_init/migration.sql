/*
  Warnings:

  - You are about to drop the column `color` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `accountId` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `categoryId` on table `Transaction` required. This step will fail if there are existing NULL values in that column.
  - Made the column `environmentId` on table `Transaction` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Account` DROP FOREIGN KEY `Account_environmentId_fkey`;

-- DropForeignKey
ALTER TABLE `Account` DROP FOREIGN KEY `Account_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Transaction` DROP FOREIGN KEY `Transaction_accountId_fkey`;

-- DropForeignKey
ALTER TABLE `Transaction` DROP FOREIGN KEY `Transaction_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `Transaction` DROP FOREIGN KEY `Transaction_environmentId_fkey`;

-- DropForeignKey
ALTER TABLE `Transaction` DROP FOREIGN KEY `Transaction_id_fkey`;

-- AlterTable
ALTER TABLE `Category` DROP COLUMN `color`,
    ADD COLUMN `type` VARCHAR(191) NOT NULL DEFAULT 'Expense',
    ADD COLUMN `userId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Environment` ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `userId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Transaction` DROP COLUMN `accountId`,
    ADD COLUMN `dueDate` DATETIME(3) NULL,
    MODIFY `categoryId` INTEGER NOT NULL,
    MODIFY `environmentId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `Account`;

-- CreateTable
CREATE TABLE `File` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `path` VARCHAR(191) NOT NULL,
    `transactionId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CategoriesInEnvironment` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CategoriesInEnvironment_AB_unique`(`A`, `B`),
    INDEX `_CategoriesInEnvironment_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_environmentId_fkey` FOREIGN KEY (`environmentId`) REFERENCES `Environment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `File` ADD CONSTRAINT `File_transactionId_fkey` FOREIGN KEY (`transactionId`) REFERENCES `Transaction`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoriesInEnvironment` ADD CONSTRAINT `_CategoriesInEnvironment_A_fkey` FOREIGN KEY (`A`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoriesInEnvironment` ADD CONSTRAINT `_CategoriesInEnvironment_B_fkey` FOREIGN KEY (`B`) REFERENCES `Environment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
