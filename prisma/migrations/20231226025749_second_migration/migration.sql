/*
  Warnings:

  - You are about to alter the column `Language` on the `RequirementsTable` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `RequirementsTable` MODIFY `Language` INTEGER NOT NULL DEFAULT 0,
    MODIFY `TotalCredits` INTEGER NOT NULL DEFAULT 0;
