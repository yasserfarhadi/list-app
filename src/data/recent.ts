import { Prisma } from "@prisma/client";
import { db } from "../lib/db";

export const getRecent = async (tag: "BOOK" | "PODCAST" | "ALL") => {
  try {
    const recent = await db.recent.findMany({
      where: {
        userId: 1,
        ...(tag === "BOOK"
          ? { bookId: { not: null } }
          : tag === "PODCAST"
            ? { podcastId: { not: null } }
            : {}),
      },
      include: {
        book: tag === "BOOK" || tag === "ALL",
        podcast: tag === "PODCAST" || tag === "ALL",
      },
    });
    return recent;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export type PopulatedRecent = Prisma.RecentGetPayload<{
  include: {
    book: true;
    podcast: true;
  };
}>;
