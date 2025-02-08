"use client";

import { useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContext";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import HeadingSlider from "@/components/HeadingSlider";
import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import TopCategories from "@/components/TopCategoies";

export default function Home() {
  const { filter, setFilter,setIsOrderMade} = useContext(AppContext);
  const { categories } = useContext(AppContext);

  useEffect(()=>{
    setIsOrderMade(false)
  },[])

  return (
    <div className="w-full">
      <Navbar home="Home" />
      <HeadingSlider setFilter={setFilter} filter={filter} />
      <ImageSlider/>
      <SearchBar />
      <TopCategories />
      {categories.map((item, index) => {
        // Check if the item is of type Category (it must have name and slug)
        if (typeof item === "object") {
          return <Category key={index} item={item} />;
        }
        // If the item is a string, we can handle it differently or skip it
        return null; // Or return a default component if needed
      })}
      <Footer />
    </div>
  );
}
