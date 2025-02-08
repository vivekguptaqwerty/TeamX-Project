"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AppContext } from "@/app/Context/AppContext";
import Image from "next/image";

export default function MakeOrder() {
  const {setIsLoading,orderDetails} = useContext(AppContext)
  const router = useRouter();
  const [leverage, setLeverage] = useState(1);
  const [value, setValue] = useState<number>(10);
  const maxTradeSize = orderDetails?.max_wager;
  const maxLeverage = orderDetails?.max_leverage;



  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);


  const handleTradeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setValue(newValue);
  };

  const handleLeverage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeverage(parseInt(e.target.value));
  };

  const handleTradeSizePlus = (amount: number) => {
    const currentValue = parseFloat(value.toString());
    const newValue = Math.min(currentValue + amount, maxTradeSize);
    setValue(newValue);
  };

  const handleLeveragePlus = (percentage: number) => {
    const increment = Math.floor((maxLeverage * percentage) / 100);
    const newValue = Math.min(leverage + increment, maxLeverage);
    setLeverage(newValue);
  };

  const leveragePercentage = ((leverage - 1) / (maxLeverage - 1)) * 100;
  const tradeSizePercentage = (value / maxTradeSize) * 100;

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

  // Format the display value to always show 2 decimal places
  const displayValue = value.toFixed(2);
  const [wholePart, decimalPart] = displayValue.split(".");

  return (
    <div className="px-5">
      <div className="flex gap-3 mt-5 leading-6 mb-10">
        <div className="w-1/2 px-5 py-5 bg-[#131313] rounded-md flex flex-col">
          <div className="flex justify-between items-center border-b border-dashed border-[#676767] pb-3">
            <p className="text-[13px]">
              Potential <br /> Payout
            </p>
            <p className="text-[#FFAE2A] text-[23px]">+1.3%</p>
          </div>
          <div className="flex items-center justify-center text-[#00FFB8] text-[22px] pt-3">
            $43
          </div>
        </div>
        <div className="w-1/2 px-5 py-5 bg-[#131313] rounded-md flex flex-col">
          <div className="flex justify-between items-center border-b border-dashed border-[#676767] pb-3">
            <p className="text-[13px]">
              New <br />
              Probability
            </p>
            <p className="text-[#FFAE2A] text-[23px]">+1.3%</p>
          </div>
          <div className="flex items-center justify-center text-[#00FFB8] text-[22px] pt-3">
            78%
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h1 className="text-[23px] mb-5">Your choice</h1>
        <div className="flex flex-col gap-2">
          <p className="text-[19px] font-light">A. Jannik Sinner</p>
          <div className="flex justify-between items-center gap-2">
            <div className="h-[19px] rounded-lg w-[80%] bg-[#00FFBB]"></div>
            <p className="text-[19px] font-light">80%</p>
            <Image
              src="/images/checkbox.png"
              alt="checkbox"
              height={20}
              width={20}
            />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-[23px] mb-5">Total Size</h1>
        <div className="border-[#454545] flex rounded-md border-[0.4px] gap-2 p-2">
          <div className="w-[60%] px-2 text-[19px]">
            ${wholePart}.{decimalPart}
          </div>
          <button
            onClick={() => handleTradeSizePlus(20)}
            className="bg-[#1b1b1b] rounded-md py-1 px-2 font-semibold text text-[13px] hover:bg-[#2b2b2b]"
          >
            +20
          </button>
          <button
            onClick={() => handleTradeSizePlus(50)}
            className="bg-[#1b1b1b] rounded-md py-1 px-2 font-semibold text text-[13px] hover:bg-[#2b2b2b]"
          >
            +50
          </button>
          <button
            onClick={() => handleTradeSizePlus(100)}
            className="bg-[#1b1b1b] rounded-md py-1 px-2 font-semibold text text-[13px] hover:bg-[#2b2b2b]"
          >
            +100
          </button>
        </div>
        <div className="pl-2 mt-3">
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
          <div className="flex flex-row-reverse">
            <p className="text-[#00FFB8] text-xs mt-5">
              Max trade size | ${maxTradeSize} MAX
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-[23px] mb-5">Leverage</h1>
        <div className="border-[#454545] flex rounded-md border-[0.4px] gap-2 p-2">
          <div className="w-[60%] text-[19px] px-2">x{leverage}</div>
          <button
            onClick={() => handleLeveragePlus(20)}
            className="bg-[#1b1b1b] rounded-md py-1 px-2 font-semibold text text-[13px] hover:bg-[#2b2b2b]"
          >
            +20
          </button>
          <button
            onClick={() => handleLeveragePlus(50)}
            className="bg-[#1b1b1b] rounded-md py-1 px-2 font-semibold text text-[13px] hover:bg-[#2b2b2b]"
          >
            +50
          </button>
          <button
            onClick={() => handleLeveragePlus(100)}
            className="bg-[#1b1b1b] rounded-md py-1 px-2 font-semibold text text-[13px] hover:bg-[#2b2b2b]"
          >
            +100
          </button>
        </div>
        <div className="pl-2 mt-3">
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
          <div className="flex flex-row-reverse">
            <p className="text-[#FF4E00] text-xs mt-5">
              Max Available leverage | {maxLeverage}MAX
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="text-[#00FFB8] w-full border border-[#00FFB8] mt-8 py-3 rounded-2xl"
      >
        Proceed
      </button>
    </div>
  );
}
