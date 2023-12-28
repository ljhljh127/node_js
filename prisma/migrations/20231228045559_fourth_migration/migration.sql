/*
  Warnings:

  - Added the required column `PostTitle` to the `BoardTable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `BoardTable` ADD COLUMN `PostTitle` VARCHAR(191) NOT NULL;
