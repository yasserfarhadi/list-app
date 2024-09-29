import { db } from "../lib/db";

export const getPodcastById = async (id: number) => {
  try {
    const podcast = await db.podcast.findUnique({
      where: {
        id: +id,
      },
    });
    return podcast;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
export const getPodcasts = async (filter?: string) => {
  try {
    const podcasts = await db.podcast.findMany({
      ...(filter && filter !== "All"
        ? {
            where: {
              tags: {
                some: {
                  tag: {
                    name: filter,
                  },
                },
              },
            },
          }
        : {}),
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
    return podcasts;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
