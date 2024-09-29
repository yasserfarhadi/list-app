-- CreateTable
CREATE TABLE "Recent" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "bookId" INTEGER,
    "podcastId" INTEGER,
    "viewedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Recent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Recent_userId_bookId_idx" ON "Recent"("userId", "bookId");

-- CreateIndex
CREATE INDEX "Recent_userId_podcastId_idx" ON "Recent"("userId", "podcastId");

-- AddForeignKey
ALTER TABLE "Recent" ADD CONSTRAINT "Recent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recent" ADD CONSTRAINT "Recent_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recent" ADD CONSTRAINT "Recent_podcastId_fkey" FOREIGN KEY ("podcastId") REFERENCES "Podcast"("id") ON DELETE CASCADE ON UPDATE CASCADE;
