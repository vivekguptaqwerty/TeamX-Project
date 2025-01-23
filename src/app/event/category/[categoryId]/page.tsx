'use client'
import CategoryAbout from "@/components/CategoryAbout";
import CategoryChart from "@/components/CategoryChart";
import CategoryGraph from "@/components/CategoryGraph";
import CategoryInfo from "@/components/CategoryInfo";
import Footer from "@/components/Footer";
import HeadingSlider from "@/components/HeadingSlider";
import Navbar from "@/components/Navbar";
import { useContext } from "react";
import { AppContext } from '../../../Context/AppContext';

export default function EventCategoryPageDetails() {
    const { filter,setFilter}:any = useContext(AppContext);
    return (
        <div>
            <Navbar home={"Home"}/>
            <HeadingSlider filter={"Reccomend"} setFilter={setFilter}/>
            <CategoryInfo/>
            <CategoryGraph/>
            <CategoryChart/>
            <CategoryAbout/>
            <Footer/>
        </div>
    );
}