"use client";

import React, { createContext, useState, ReactNode } from "react";

interface AppContextProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextProps>({
  filter: "Recommend",
  setFilter: () => {},
  selectedMenu: "Home",
  setSelectedMenu: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  search: "",
  setSearch: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState("Reccomend");
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [search, setSearch] = useState("");

  return (
    <AppContext.Provider
      value={{
        filter,
        setFilter,
        selectedMenu,
        setSelectedMenu,
        isLoggedIn,
        setIsLoggedIn,
        search,
        setSearch
      }}
    >
      {children}
    </AppContext.Provider>
  );
};