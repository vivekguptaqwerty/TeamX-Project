"use client";
import { AppContext } from "@/app/Context/AppContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import CustomCheckbox from "./CustomCheckbox";

export default function CategoryGraph() {
  const router = useRouter();
  const { isLoggedIn } = useContext(AppContext);
  const [selectedCheckbox, setSelectedCheckbox] = useState(0); 

  const options = [
    { text: "A. Jannik Sinner", percentage: 80 },
    { text: "B. Jannik Sinner", percentage: 10 },
    { text: "C. Jannik Sinner", percentage: 5 },
    { text: "D. Jannik Sinner", percentage: 5 }
  ];

  const handleClick = (index: number) => {
    setSelectedCheckbox(index);
    const selectedOption = options[index];
    
    if (isLoggedIn) {
      // Encode the data to be safe in URLs
      const encodedText = encodeURIComponent(selectedOption.text);
      router.push(
        `/event/category/1/order?name=${encodedText}&percentage=${selectedOption.percentage}`
      );
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="mt-3">
      <h1 className="text-center font-bold">What do you predict ?</h1>
      <div className="pl-8 pr-5 py-8 flex flex-col gap-2">
        {options.map((option, index) => (
          <div key={index} className="flex">
            <div className="w-[85%] h-14 bg-[#131313] rounded-md flex justify-between items-center px-5 relative overflow-hidden">
              <p className="text-[15px] z-10">{option.text}</p>
              <p className="text-[17px] z-10">{option.percentage}%</p>
              <div
                className="h-14 bg-[#009C71] absolute top-0 left-0 rounded-md"
                style={{ width: `${option.percentage}%` }}
              ></div>
            </div>
            <div onClick={() => handleClick(index)} className="w-[15%] flex justify-center items-center">
              <CustomCheckbox
                checked={selectedCheckbox === index}
                onChange={() => setSelectedCheckbox(index)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}