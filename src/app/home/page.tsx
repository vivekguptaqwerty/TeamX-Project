"use client";

import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import HeadingSlider from "@/components/HeadingSlider";
import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const { filter, setFilter } = useContext(AppContext);

  const categories = [
    "TOP Topics",
    "Sports",
    "Politics",
    "Weather",
    "Science",
    "Culture",
    "Tech",
  ];

  return (
    <div className="w-full">
      <Navbar home="Home" />
      <HeadingSlider setFilter={setFilter} filter={filter} />
      <ImageSlider filter={filter} />
      <SearchBar />
      {categories.map((item, index) => {
        // If filter is "Recommend" or matches the category, display the category
        if (filter === "Reccomend" || filter.includes(item)) {
          return <Category key={index} item={item} />;
        }
        return null;
      })}
      <Footer />
    </div>
  );
}