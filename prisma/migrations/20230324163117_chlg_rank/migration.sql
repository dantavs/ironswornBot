-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_vows" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "challengeRank" TEXT NOT NULL,
    "progressTrack" INTEGER NOT NULL,
    CONSTRAINT "vows_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_vows" ("challengeRank", "characterId", "description", "id", "progressTrack", "subject") SELECT "challengeRank", "characterId", "description", "id", "progressTrack", "subject" FROM "vows";
DROP TABLE "vows";
ALTER TABLE "new_vows" RENAME TO "vows";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
