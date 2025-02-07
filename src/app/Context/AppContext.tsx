"use client"
import React, { createContext, useState, ReactNode, useEffect } from "react";

// Define the Category interface
interface Category {
  name: string;
  slug: string;
}

// Define a type for categories that can be either a Category object or a string
type Categories = (Category | string)[];

// TraderInfo interface
interface TraderInfo {
  max_leverage: number;
  estimated_payout: number;
  estimated_probability: number;
}

// AppContextProps interface to define the context structure
interface AppContextProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  slugHeading: string;
  setSlugHeading: React.Dispatch<React.SetStateAction<string>>;
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  categories: Categories;
  setCategories: React.Dispatch<React.SetStateAction<Categories>>;
  bannerData: string[];
  setBannerData: React.Dispatch<React.SetStateAction<string[]>>;
  findHeadingWithSlug: (slug: string) => string | undefined;
  getTimeRemaining: (endTime: string) => string;
  calculateMaxLeverage: (outcomes: { trader_info?: TraderInfo }[]) => number;
  calculateMaxEstimatedPayout: (outcomes: { trader_info?: TraderInfo }[]) => number;
  formatDate: (isoDateString: string) => string;
}

// Create the AppContext with default values
export const AppContext = createContext<AppContextProps>({
  filter: "",
  setFilter: () => {},
  slugHeading: "",
  setSlugHeading: () => {},
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
  bannerData: [],
  setBannerData: () => {},
  findHeadingWithSlug: () => undefined,
  getTimeRemaining: () => "",
  calculateMaxLeverage: () => 0,
  calculateMaxEstimatedPayout: () => 0,
  formatDate: () => "",
});

// AppProvider component to manage the context state
export const AppProvider = ({ children }: { children: ReactNode }) => {
  // State hooks
  const [filter, setFilter] = useState<string>("");
  const [slugHeading, setSlugHeading] = useState<string>("");
  const [selectedMenu, setSelectedMenu] = useState<string>("Home");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<Categories>([]); // Correct initialization with Categories type
  const [bannerData, setBannerData] = useState<string[]>([]);

  // Function to fetch categories from an API
  const fetchCategories = async () => {
    try {
      const response = await fetch("https://test-api.everyx.io/layout");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCategories(data.top_categories || []); // Safe default to empty array
      setBannerData(data.new_collections || []);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      setCategories([]); // Safe fallback if fetch fails
      setBannerData([]);
    }
  };

  // Function to find the heading for a category by slug
  const findHeadingWithSlug = (slug: string): string | undefined => {
    // Find the item that matches the slug
    const foundItem = categories.find((item) =>
      typeof item === "object" ? item.slug === slug : false // Check if the item is a Category and matches the slug
    );
  
    // If foundItem is a Category, return its name, otherwise return undefined
    return typeof foundItem === "object" ? foundItem.name : undefined;
  };
  // Function to calculate time remaining for an event
  const getTimeRemaining = (endTime: string): string => {
    const now = new Date();
    const endDate = new Date(endTime);
    let diff = Math.floor((endDate.getTime() - now.getTime()) / 1000);

    if (diff <= 0) return "Ended";

    const months = Math.floor(diff / (30 * 24 * 60 * 60));
    diff %= 30 * 24 * 60 * 60;
    const weeks = Math.floor(diff / (7 * 24 * 60 * 60));
    diff %= 7 * 24 * 60 * 60;
    const days = Math.floor(diff / (24 * 60 * 60));
    diff %= 24 * 60 * 60;
    const hours = Math.floor(diff / (60 * 60));

    if (months > 0) return `${months}mo ${weeks}w`;
    if (weeks > 0) return `${weeks}w ${days}d`;
    if (days > 0) return `${days}d ${hours}h`;
    return `${hours}H`;
  };

  // Function to calculate the max leverage from a set of outcomes
  const calculateMaxLeverage = (outcomes?: { trader_info?: TraderInfo }[]): number => {
    return Math.max(
      0,
      ...((outcomes ?? []).map((outcome) => outcome.trader_info?.max_leverage ?? 0))
    );
  };

  // Function to calculate the max estimated payout from a set of outcomes
  const calculateMaxEstimatedPayout = (outcomes?: { trader_info?: TraderInfo }[]): number => {
    return Math.max(
      0,
      ...((outcomes ?? []).map((outcome) => outcome.trader_info?.estimated_payout ?? 0))
    );
  };

  // Function to format a date
  const formatDate = (isoDateString: string): string => {
    const date = new Date(isoDateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <AppContext.Provider
      value={{
        filter,
        setFilter,
        slugHeading,
        setSlugHeading,
        selectedMenu,
        setSelectedMenu,
        isLoggedIn,
        setIsLoggedIn,
        search,
        setSearch,
        isLoading,
        setIsLoading,
        categories,
        setCategories,
        bannerData,
        setBannerData,
        findHeadingWithSlug,
        getTimeRemaining,
        calculateMaxLeverage,
        calculateMaxEstimatedPayout,
        formatDate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
