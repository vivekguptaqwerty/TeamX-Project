"use client";

import React, { createContext, useState, ReactNode } from "react";

interface AppContextProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextProps>({
  filter: "Recommend",
  setFilter: () => {},
  selectedMenu: "Home",
  setSelectedMenu: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState("Reccomend");
  const [selectedMenu, setSelectedMenu] = useState("Home");

  return (
    <AppContext.Provider value={{ filter, setFilter, selectedMenu, setSelectedMenu }}>
      {children}
    </AppContext.Provider>
  );
};
