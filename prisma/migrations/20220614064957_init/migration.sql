/*
  Warnings:

  - You are about to drop the column `body` on the `post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `post` DROP COLUMN `body`,
    ADD COLUMN `content` VARCHAR(191) NULL;
