"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";

interface AppContextProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
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
  isLoading: false,
  setIsLoading: () => {},
  categories: [],
  setCategories: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState("Recommend");
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<string[]>([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://test-api.everyx.io/layout');   
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCategories(data.top_categories || []);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
      setCategories([]);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  

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
        setSearch,
        isLoading,
        setIsLoading,
        categories,
        setCategories
      }}
    >
      {children}
    </AppContext.Provider>
  );
};