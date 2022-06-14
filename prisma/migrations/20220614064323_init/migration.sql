/*
  Warnings:

  - Made the column `body` on table `post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `post` MODIFY `body` VARCHAR(191) NOT NULL;
