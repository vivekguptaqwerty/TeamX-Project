"use client";
import { AppContext } from "@/app/Context/AppContext";
import { useContext, useState } from "react";

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
}

const outcomeColors = ["#00FFBB", "#FF5952", "#924DD3", "#26A45B"];

export default function CategoryGraph({ eventData }: CategoryInfoProps) {
  const [isLoading] = useState(false);
  const [error] = useState<string | null>(null);
  const { makeOrder } = useContext(AppContext);

  return (
    <div className="mt-3">
      <h1 className="font-bold px-5 text-[23px]">What do you predict ?</h1>

      {error && <div className="px-5 text-red-500 mb-3">{error}</div>}

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

      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-white"></div>
        </div>
      )}
    </div>
  );
}
