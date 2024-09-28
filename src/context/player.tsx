"use client";

import React from "react";

interface State {
  isOpen: boolean;
  isMinimized: boolean;
  isLoading: boolean;
  id: string | null;
  data: null;
}

type Action =
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "MINIMIZE" }
  | { type: "MAXIMIZE" }
  | { type: "SET_ITEM"; payload: null };

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
  setItem: (id: string) => void;
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
        data: null,
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
        data: null,
        isOpen: true,
        isMinimized: false,
        isLoading: false,
      };
    default:
      return state;
  }
}

const PlayerProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const setItem = React.useCallback(async (id: string) => {
    //get item
    dispatch({ type: "OPEN" });
    console.log(id);
    const data = await {};
    await new Promise((r) => setTimeout(r, 2000));
    console.log(data);
    dispatch({ type: "SET_ITEM", payload: null });
  }, []);

  return (
    <context.Provider value={{ state, setItem, dispatch }}>
      {children}
    </context.Provider>
  );
};

export default PlayerProvider;
