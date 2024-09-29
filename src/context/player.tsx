"use client";

import { getPodcast } from "@/actions/podcast";
import { Podcast } from "@prisma/client";
import React from "react";

interface State {
  isOpen: boolean;
  isMinimized: boolean;
  isLoading: boolean;
  id: string | null;
  data: Podcast | null;
}

type Action =
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "MINIMIZE" }
  | { type: "MAXIMIZE" }
  | { type: "SET_ITEM"; payload: Podcast };

const initialState: State = {
  isOpen: false,
  isMinimized: false,
  isLoading: false,
  id: null,
  data: null,
};

const context = React.createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
  setItem: (id: number) => void;
} | null>(null);

export const usePlayer = () => React.useContext(context);

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "OPEN":
      return {
        ...state,
        isOpen: true,
        isMinimized: false,
        isLoading: true,
      };
    case "CLOSE":
      return { ...state, isOpen: false, isMinimized: false, activeItem: null };
    case "MINIMIZE":
      return { ...state, isMinimized: true };
    case "MAXIMIZE":
      return { ...state, isMinimized: false };
    case "SET_ITEM":
      return {
        ...state,
        isMinimized: false,
        isLoading: false,
        data: action.payload,
      };
    default:
      return state;
  }
}

const PlayerProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const setItem = React.useCallback(async (id: number) => {
    dispatch({ type: "OPEN" });
    const data = await getPodcast(id);
    if (data && !("error" in data)) {
      dispatch({ type: "SET_ITEM", payload: data });
    }
  }, []);

  return (
    <context.Provider value={{ state, setItem, dispatch }}>
      {children}
    </context.Provider>
  );
};

export default PlayerProvider;
