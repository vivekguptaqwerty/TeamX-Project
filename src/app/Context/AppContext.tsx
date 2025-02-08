"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";

// Define the shape of the context data
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
  authToken: string | null;
  setAuthToken: React.Dispatch<React.SetStateAction<string | null>>;
}

// Create context with the initial values
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
  authToken: null,
  setAuthToken: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState("Recommend");
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [authToken, setAuthToken] = useState<string | null>(null);

  // Fetch AuthToken from cookies on component mount
  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const tokenCookie = cookies.find((cookie) =>
      cookie.startsWith("authToken=")
    );

    if (tokenCookie) {
      const token = tokenCookie.split("=")[1]; // Extract the token
      console.log("Auth token retrieved from cookies:", token); // Log token
      setAuthToken(token);
    } else {
      console.log("No authToken found in cookies."); // Log if no token found
    }
  }, []); // Only run on mount

  // This useEffect will run when authToken changes
  useEffect(() => {
    console.log("authToken changed:", authToken); // Log whenever authToken is updated
    if (authToken) {
      setIsLoggedIn(true); // Set isLoggedIn to true if token exists
      console.log("User is logged in.");
    } else {
      setIsLoggedIn(false); // Set isLoggedIn to false if no token is found
      console.log("User is not logged in.");
    }
  }, [authToken]); // Runs when authToken is updated

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
        authToken,
        setAuthToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
