/*
  Warnings:

  - A unique constraint covering the columns `[UserID]` on the table `RequirementsTable` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `RequirementsTable_UserID_key` ON `RequirementsTable`(`UserID`);
