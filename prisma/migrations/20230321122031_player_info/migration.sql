/*
  Warnings:

  - You are about to drop the column `player` on the `characters` table. All the data in the column will be lost.
  - Added the required column `playerId` to the `characters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playerUsername` to the `characters` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_characters" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "edge" INTEGER NOT NULL,
    "heart" INTEGER NOT NULL,
    "iron" INTEGER NOT NULL,
    "shadow" INTEGER NOT NULL,
    "wits" INTEGER NOT NULL,
    "health" INTEGER NOT NULL DEFAULT 5,
    "spirit" INTEGER NOT NULL DEFAULT 5,
    "supply" INTEGER NOT NULL DEFAULT 5,
    "momentum" INTEGER NOT NULL DEFAULT 2,
    "playerId" TEXT NOT NULL,
    "playerUsername" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_characters" ("createdAt", "edge", "health", "heart", "id", "iron", "momentum", "name", "shadow", "spirit", "supply", "wits") SELECT "createdAt", "edge", "health", "heart", "id", "iron", "momentum", "name", "shadow", "spirit", "supply", "wits" FROM "characters";
DROP TABLE "characters";
ALTER TABLE "new_characters" RENAME TO "characters";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
