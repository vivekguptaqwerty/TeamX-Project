"use client";

import React, { createContext, useState, ReactNode } from "react";

interface AppContextProps {
 filter: string;
 setFilter: React.Dispatch<React.SetStateAction<string>>;
 selectedMenu: string;
 setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
 isLoggedIn: boolean;
 setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextProps>({
 filter: "Recommend",
 setFilter: () => {},
 selectedMenu: "Home",
 setSelectedMenu: () => {},
 isLoggedIn: false,
 setIsLoggedIn: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
 const [filter, setFilter] = useState("Reccomend");
 const [selectedMenu, setSelectedMenu] = useState("Home");
 const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

 return (
   <AppContext.Provider 
     value={{ 
       filter, 
       setFilter, 
       selectedMenu, 
       setSelectedMenu,
       isLoggedIn,
       setIsLoggedIn 
     }}
   >
     {children}
   </AppContext.Provider>
 );
};