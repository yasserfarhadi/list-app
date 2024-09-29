"use server";

import { getRecent } from "@/data/recent";

const filters = ["ALL", "BOOK", "PODCAST"] as const;
type Filter = (typeof filters)[number];

export const getSavedItems = async (type: Filter) => {
  if (!filters.includes(type)) throw new Error("Wrong input!");
  try {
    const savedItems = await getRecent(type);
    return savedItems;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return { error: "Somthing went wrong! " + error.message };
    }
    throw error;
  }
};
