-- AlterTable
ALTER TABLE `Transaction` ADD COLUMN `userId` INTEGER NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `Image` VARCHAR(191) NULL,
    MODIFY `isAdmin` BOOLEAN NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
