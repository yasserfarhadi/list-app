"use server";

import { getPodcastById } from "@/data/podcast";

export const getPodcast = async (id: number) => {
  if (!id) throw new Error("Wrong input!");
  try {
    const podcast = await getPodcastById(id);
    return podcast;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return { error: "Somthing went wrong! " + error.message };
    }
    throw error;
  }
};
