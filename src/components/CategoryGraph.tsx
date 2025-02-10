"use client";
import { AppContext } from "@/app/Context/AppContext";
import { useContext, useEffect } from "react";

interface TraderInfo {
  max_leverage: number;
  estimated_payout: number;
  estimated_probability: number;
}

interface Outcome {
  _id: string;
  name: string;
  trader_info: TraderInfo;
}

interface Category {
  name: string;
}

interface EventData {
  _id: string;
  name: string;
  description: string;
  category: Category;
  ends_at: string;
  outcomes: Outcome[];
  event_images_url: string[];
}

interface CategoryInfoProps {
  eventData: EventData;
  setSelectedOrder: React.Dispatch<React.SetStateAction<string>>;
}

const outcomeColors = ["#00FFBB", "#FF5952", "#924DD3", "#26A45B"];

export default function CategoryGraph({ eventData,setSelectedOrder }: CategoryInfoProps) {
  const { makeOrder,setIsLoading,setIsOrderMade} = useContext(AppContext);

  useEffect(()=>{
    setIsOrderMade(false)
  },[])

  return (
    <div className="mt-3">
      <h1 className="px-5 text-[23px]">What do you predict ?</h1>
      <div className="pl-5 pr-5 py-8 flex flex-col gap-5">
        {eventData?.outcomes.map((outcome: Outcome, index: number) => (
          <div key={outcome._id} className="flex flex-col gap-1">
            <p className="text-[19px] font-light">
              {String.fromCharCode(65 + index)}.{" "}
              {outcome.name.charAt(0).toUpperCase() + outcome.name.slice(1)}
            </p>
            <div className="flex justify-between items-center gap-2">
              <div
                onClick={() => {
                  setIsLoading(true)
                  setSelectedOrder(String.fromCharCode(65 + index)+". "+outcome.name.charAt(0).toUpperCase() + outcome.name.slice(1))
                  makeOrder(outcome?._id, eventData?._id, 10);
                }}
                className="h-[19px] rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                  backgroundColor: outcomeColors[index],
                  width: `${Math.round(
                    outcome.trader_info.estimated_probability * 100
                  )}%`,
                }}
              ></div>
              <p className="text-[19px] font-light">
                {Math.round(outcome.trader_info.estimated_probability * 100)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
