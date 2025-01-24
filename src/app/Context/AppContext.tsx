"use client"

import React, { createContext, useState, ReactNode } from 'react';

interface AppContextProps {
    filter: string;  // Changed from String to string
    setFilter: React.Dispatch<React.SetStateAction<string>>;  // Changed from String to string
}

export const AppContext = createContext<AppContextProps>({  // Removed undefined, provided initial value
    filter: 'Recommend',
    setFilter: () => {}
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [filter, setFilter] = useState('Recommend');

    return (
        <AppContext.Provider value={{ filter, setFilter }}>
            {children}
        </AppContext.Provider>
    );
};