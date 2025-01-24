
'use client';

import { useContext } from "react";
import { AppContext } from './Context/AppContext';
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import HeadingSlider from "@/components/HeadingSlider";
import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const { filter, setFilter } = useContext(AppContext); 

  const categories = ["TOP Topics", "Sports TOP", "Politics", "Weather", "Science", "Culture", "Tech"];

  return (
    <div className="w-full">
      <Navbar home="Home" />
      <HeadingSlider setFilter={setFilter} filter={filter} />
      <ImageSlider filter={filter} />
      <SearchBar />
      {categories.map((item, index) => (
        <Category key={index} item={item} />
      ))}
      <Footer />
    </div>
  );
}

// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function Page() {
//   const router = useRouter();

//   useEffect(() => {
//     // Redirect to the loading page
//     router.push("/Loader");
//   }, [router]);

//   return null; // No UI since this is just for redirection
// }