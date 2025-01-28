"use client"
import { useContext, useState } from "react";
import { AppContext } from "@/app/Context/AppContext";
import HeadingSlider from "@/components/HeadingSlider";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

export default function Pay() {
    const router = useRouter();
    const { filter, setFilter } = useContext(AppContext);
    const [value, setValue] = useState("10");

    return (
        <div>
            <Navbar home="Home" />
            <HeadingSlider filter={filter} setFilter={setFilter} />
            <h1 className="text-center mt-10 mb-4">Order</h1>
            <div className="flex justify-between p-5">
                {["10", "20", "50", "100"].map((item, index) => {
                    return (
                        <div onClick={()=>{setValue(item)}} key={index} className={`bg-[#1D1D1D] px-7 py-[8px] rounded-2xl text-[#707070] ${value===item && "text-[#fff]"}`}>${item}</div>
                    )
                })}
            </div>
            <div className="text-center mt-3 px-5 font-light">
                <p className="text-[15px] mb-3">Total size</p>
                <p className="text-[47px] font-medium">${value}.<span className="text-[37px]">00</span></p>
                <p className="text-[15px] mt-9 mb-3 font-light">leverage</p>
                <p className="text-[47px] mb-9"><span className="text-[26px]">x</span>1</p>
                <p className="text-xs font-extralight">WARNING YOU DON&apos;T HAVE SUFFICIENT FUNDS</p>
                <button onClick={()=>{router.push("/deposit-withdrawal/history")}} className="text-[#00FFB8] w-full border border-[#00FFB8] mt-6 py-4 rounded-2xl">Proceed</button>
            </div>
        </div>
    );
}
