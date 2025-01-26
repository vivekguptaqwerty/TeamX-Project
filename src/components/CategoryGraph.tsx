"use client"
import { AppContext } from "@/app/Context/AppContext";
import { useRouter } from "next/navigation"
import { useContext } from "react";

export default function CategoryGraph() {

    const router = useRouter()
    const {isLoggedIn} = useContext(AppContext);

    const handleClick = () => {
        if (isLoggedIn) {
          router.push("/event/category/1/pay");
        } else {
          router.push("/login"); // Redirect to login if not authenticated
        }
      };

    return (
        <div onClick={handleClick} className="mt-3">
            <h1 className="text-center font-bold">What do you predict ?</h1>
            <div className="p-8 flex flex-col gap-2">
                {["80", "15", "5", "5"].map((item, index) => {
                    return (
                        <div key={index} className="w-full h-14 bg-[#131313] rounded-md flex justify-between items-center px-5 relative overflow-hidden">
                            <p className="text-[15px] z-10">A. Jannik Sinner</p>
                            <p className="text-[17px] z-10">{item}%</p>
                            {/* Apply dynamic width directly using inline style */}
                            <div className="h-14 bg-[#009C71] absolute top-0 left-0 rounded-md" style={{ width: `${item}%` }}></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
