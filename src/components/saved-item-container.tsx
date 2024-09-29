import React from "react";
import FilterButton from "./filter-button";
import SavedItem from "./saved-item";
import { usePlayer } from "@/context/player";
import { getSavedItems } from "@/actions/saved-filter";
import { PopulatedRecent } from "@/data/recent";
import { Spinner } from "./spinner";

type Filter = "ALL" | "BOOK" | "PODCAST";

const SavedItemContaienr = () => {
  const player = usePlayer();
  const [state, setState] = React.useState<Filter>("ALL");
  const [savedItems, setSavedItems] = React.useState<PopulatedRecent[]>([]);
  const [pending, startTransition] = React.useTransition();
  const filterHandler = React.useCallback(function (type: Filter) {
    setState(type);
    startTransition(async () => {
      const data = await getSavedItems(type);
      if (data && !("error" in data)) {
        setSavedItems(data);
      }
    });
  }, []);
  React.useEffect(() => {
    filterHandler("ALL");
  }, [filterHandler]);
  return (
    <>
      <div className="flex items-center gap-2 px-3">
        <FilterButton
          text="All"
          isActive={state === "ALL"}
          onClick={filterHandler.bind(null, "ALL")}
        />
        <FilterButton
          text="Podcast"
          isActive={state === "PODCAST"}
          onClick={filterHandler.bind(null, "PODCAST")}
        />
        <FilterButton
          text="Book"
          isActive={state === "BOOK"}
          onClick={filterHandler.bind(null, "BOOK")}
        />
      </div>
      <div className="v-no-scrollbar relative h-[calc(100vh-275px-116px)] overflow-auto overflow-x-hidden">
        {pending && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/60">
            <Spinner />
          </div>
        )}

        {savedItems.map((item) => {
          if (item.book) {
            return (
              <SavedItem
                key={item.id}
                image={item.book.imageUrl}
                title={item.book.title}
                presenter={item.book.author}
                onClick={() => {}}
              />
            );
          }
          if (item.podcast !== null) {
            return (
              <SavedItem
                key={item.id}
                image={item.podcast.imageUrl}
                title={item.podcast.title}
                presenter={item.podcast.host}
                onClick={() => item.podcast && player?.setItem(item.podcast.id)}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default SavedItemContaienr;
