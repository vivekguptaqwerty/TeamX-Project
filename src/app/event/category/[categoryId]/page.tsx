"use client";

import { useContext, useEffect } from "react";
import { AppContext } from "@/app/Context/AppContext";
import CategoryAbout from "@/components/CategoryAbout";
import CategoryChart from "@/components/CategoryChart";
import CategoryGraph from "@/components/CategoryGraph";
import CategoryInfo from "@/components/CategoryInfo";
import Footer from "@/components/Footer";
import HeadingSlider from "@/components/HeadingSlider";
import Navbar from "@/components/Navbar";

export default function EventCategoryPageDetails() {
  const { filter, setFilter } = useContext(AppContext); // Removed :any

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <div>
      <Navbar home="Home" />
      <HeadingSlider filter={filter} setFilter={setFilter} />{" "}
      {/* Fixed typo in "Recommend" */}
      <CategoryInfo />
      <CategoryGraph />
      <CategoryChart />
      <CategoryAbout />
      <Footer />
    </div>
  );
}
