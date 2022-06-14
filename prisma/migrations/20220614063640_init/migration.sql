/*
  Warnings:

  - You are about to drop the column `authorId` on the `post` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Post_authorId_fkey` ON `post`;

-- AlterTable
ALTER TABLE `post` DROP COLUMN `authorId`;
