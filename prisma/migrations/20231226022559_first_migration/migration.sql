-- CreateTable
CREATE TABLE `UserTable` (
    `UserID` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `Gender` VARCHAR(191) NOT NULL,
    `Birthday` DATETIME(3) NOT NULL,
    `PhoneNumber` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`UserID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BoardTable` (
    `PostID` INTEGER NOT NULL AUTO_INCREMENT,
    `PostContent` VARCHAR(191) NOT NULL,
    `UserID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`PostID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RequirementsTable` (
    `RequirementID` INTEGER NOT NULL AUTO_INCREMENT,
    `Language` VARCHAR(191) NOT NULL,
    `TotalCredits` INTEGER NOT NULL,
    `UserID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`RequirementID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BoardTable` ADD CONSTRAINT `BoardTable_UserID_fkey` FOREIGN KEY (`UserID`) REFERENCES `UserTable`(`UserID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RequirementsTable` ADD CONSTRAINT `RequirementsTable_UserID_fkey` FOREIGN KEY (`UserID`) REFERENCES `UserTable`(`UserID`) ON DELETE CASCADE ON UPDATE CASCADE;
