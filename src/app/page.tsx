import Category from "@/components/Category";
import Footer from "@/components/Footer";
import HeadingSlider from "@/components/HeadingSlider";
import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";


export default function Home() {
  return (
    <div className="w-full">
      <Navbar home={"Home"} />
      <HeadingSlider/>  
      <ImageSlider/> 
      <SearchBar/>
      {["TOP Topics","Sports TOP","Politics","Weather","Science","Culture","Tech"].map((item,index)=>{
        return(
          <Category item={item}/>
        )
      })}
      <Footer/>
    </div>
  );
}
