-- CreateTable
CREATE TABLE "characters" (
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
    "player" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "assets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    CONSTRAINT "assets_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "vows" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    CONSTRAINT "vows_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
