/*
  Warnings:

  - Added the required column `challengeRank` to the `vows` table without a default value. This is not possible if the table is not empty.
  - Added the required column `progressTrack` to the `vows` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_vows" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "challengeRank" INTEGER NOT NULL,
    "progressTrack" INTEGER NOT NULL,
    CONSTRAINT "vows_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_vows" ("characterId", "description", "id", "subject") SELECT "characterId", "description", "id", "subject" FROM "vows";
DROP TABLE "vows";
ALTER TABLE "new_vows" RENAME TO "vows";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
