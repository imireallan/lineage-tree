/*
  Warnings:

  - You are about to drop the column `spouseId` on the `Person` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Marriage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "spouseAId" TEXT NOT NULL,
    "spouseBId" TEXT NOT NULL,
    CONSTRAINT "Marriage_spouseAId_fkey" FOREIGN KEY ("spouseAId") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Marriage_spouseBId_fkey" FOREIGN KEY ("spouseBId") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Person" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "gender" TEXT,
    "birthDate" DATETIME,
    "deathDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "parentId" TEXT,
    CONSTRAINT "Person_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Person" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Person" ("birthDate", "createdAt", "deathDate", "gender", "id", "name", "parentId") SELECT "birthDate", "createdAt", "deathDate", "gender", "id", "name", "parentId" FROM "Person";
DROP TABLE "Person";
ALTER TABLE "new_Person" RENAME TO "Person";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Marriage_spouseAId_spouseBId_key" ON "Marriage"("spouseAId", "spouseBId");
