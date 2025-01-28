"use client";
import { AppContext } from "@/app/Context/AppContext";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import HeadingSlider from "@/components/HeadingSlider";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import { useContext } from "react";

export default function EventCategoryPage() {
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
    <div>
      <Navbar home={"Home"} />
      <HeadingSlider setFilter={setFilter} filter={filter} />
      <SearchBar />
      {categories.map((item, index) => {
        if (filter.includes(item)) {
          return <Category key={index} item={item} />;
        }
        return null;
      })}
      <Footer />
    </div>
  );
}
