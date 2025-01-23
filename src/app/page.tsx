'use client';
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import HeadingSlider from "@/components/HeadingSlider";
import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import { useContext } from "react";
import { AppContext } from './Context/AppContext';

export default function Home() {
  const { filter, setFilter } = useContext(AppContext);
  
  return (
    <div className="w-full">
      <Navbar home={"Home"} />
      <HeadingSlider setFilter={setFilter} filter={filter}/>
      <ImageSlider filter={filter}/>
      <SearchBar />
      {["TOP Topics", "Sports TOP", "Politics", "Weather", "Science", "Culture", "Tech"].map((item, index) => {
        return (
          <Category key={index} item={item} />
        )
      })}
      <Footer />
    </div>
  );
}