"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [filter, setFilter] = useState<string>('Recommend');

    return (
        <AppContext.Provider value={{ filter, setFilter }}>
            {children}
        </AppContext.Provider>
    );
};