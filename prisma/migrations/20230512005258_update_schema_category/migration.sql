/*
  Warnings:

  - You are about to drop the `_CategoriesInEnvironment` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `environmentId` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_CategoriesInEnvironment` DROP FOREIGN KEY `_CategoriesInEnvironment_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CategoriesInEnvironment` DROP FOREIGN KEY `_CategoriesInEnvironment_B_fkey`;

-- AlterTable
ALTER TABLE `Category` ADD COLUMN `environmentId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_CategoriesInEnvironment`;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_environmentId_fkey` FOREIGN KEY (`environmentId`) REFERENCES `Environment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
