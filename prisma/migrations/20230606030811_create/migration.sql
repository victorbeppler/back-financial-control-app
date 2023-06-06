/*
  Warnings:

  - You are about to drop the column `datePaid` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Transaction` DROP COLUMN `datePaid`,
    ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'Pending';
