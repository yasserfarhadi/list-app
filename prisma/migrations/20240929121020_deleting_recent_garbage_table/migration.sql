/*
  Warnings:

  - You are about to drop the `Recent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Recent" DROP CONSTRAINT "RecentBookId_fk";

-- DropForeignKey
ALTER TABLE "Recent" DROP CONSTRAINT "RecentPodcastId_fk";

-- DropForeignKey
ALTER TABLE "Recent" DROP CONSTRAINT "Recent_userId_fkey";

-- DropTable
DROP TABLE "Recent";
