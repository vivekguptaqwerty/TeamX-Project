"use client";

import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import HeadingSlider from "@/components/HeadingSlider";
import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import TopCategories from "@/components/TopCategoies";


export default function Home() {
  const { filter, setFilter, search } = useContext(AppContext);

  const categories = [
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
      <TopCategories/>
      {categories.map((item, index) => {
        if (item.toLowerCase().includes(search.toLowerCase())) {
          return <Category key={index} item={item} />;
        }
        return null;
      })}
      <Footer />
    </div>
  );
}
