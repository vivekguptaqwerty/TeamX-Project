"use client";
import { useContext, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { IoIosWarning } from "react-icons/io";
import { AppContext } from "@/app/Context/AppContext";

export default function Order() {
  const { setIsLoading } = useContext(AppContext);
  const router = useRouter();
  const [value, setValue] = useState("10");
  const [leverage, setLeverage] = useState(1);
  const maxTradeSize = 436.58;
  const maxLeverage = 10;
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  // Get the parameters
  const name = searchParams.get("name");
  const percentage = searchParams.get("percentage");

  const handleTradeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setValue(newValue.toFixed(2));
  };

  const handleLeverage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeverage(parseInt(e.target.value));
  };

  const leveragePercentage = ((leverage - 1) / (maxLeverage - 1)) * 100;
  const tradeSizePercentage = (parseFloat(value) / maxTradeSize) * 100;

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await router.push("/deposit-withdrawal/history");
    } catch (error) {
      console.error("Navigation error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar home="Your Order" />
      <p className="text-[#00FFB8] text-center mt-10 mb-4 text-[22px]">
        {name} {percentage}%{" "}
      </p>
      <div className="flex justify-between p-5">
        {["10", "20", "50", "100"].map((item, index) => {
          return (
            <div
              onClick={() => setValue(item)}
              key={index}
              className={`bg-[#1D1D1D] px-7 py-[8px] rounded-2xl text-[#707070] ${
                value === item && "text-[#fff]"
              }`}
            >
              ${item}
            </div>
          );
        })}
      </div>
      <div className="text-center mt-5 px-5 font-light">
        <div>
          <div className="flex items-end px-5 gap-[56px]">
            <p className="text-[15px] mb-2">Total size</p>
            <p className="text-[31px] font-semibold">
              ${parseFloat(value).toString().split(".")[0]}
              <span className="text-[25px]">
                .{parseFloat(value).toFixed(2).split(".")[1] || "00"}
              </span>
            </p>
          </div>
          <div className="px-5">
            <input
              type="range"
              min="0"
              max={maxTradeSize}
              step="0.01"
              value={value}
              onChange={handleTradeSize}
              style={{
                background: `linear-gradient(to right, #00FFB8 ${tradeSizePercentage}%, #171717 ${tradeSizePercentage}%)`,
              }}
              className="w-full h-1 rounded-lg appearance-none cursor-pointer 
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[#00FFB8] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer
                [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-[#00FFB8] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer"
            />
          </div>
          <div className="flex flex-row-reverse mt-3 pr-5">
            <p className="text-[#00FFB8] text-xs">
              Max trade size | ${maxTradeSize} MAX
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-end px-5 gap-[90px]">
            <p className="text-[15px] mb-2">Leverage</p>
            <p className="text-[15px]">
              x<span className="text-[29px] font-semibold">{leverage}</span>
            </p>
          </div>
          <div className="px-5">
            <input
              type="range"
              min="1"
              max={maxLeverage}
              value={leverage}
              onChange={handleLeverage}
              style={{
                background: `linear-gradient(to right, #00FFB8 ${leveragePercentage}%, #171717 ${leveragePercentage}%)`,
              }}
              className="w-full h-1 rounded-lg appearance-none cursor-pointer 
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[#00FFB8] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer
                [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-[#00FFB8] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer"
            />
          </div>
          <div className="flex flex-row-reverse mt-3 pr-5">
            <p className="text-[#FF4E00] text-xs">
              Max Available leverage | {maxLeverage}MAX
            </p>
          </div>
        </div>
        <p className="text-sm mt-16 flex gap-2 items-center justify-center">
          <IoIosWarning size={18} /> WARNING YOU DON&apos;T HAVE SUFFICIENT
          FUNDS
        </p>
        <button
          onClick={handleSubmit}
          className="text-[#00FFB8] w-[70%] border border-[#00FFB8] mt-6 py-3 rounded-2xl"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
