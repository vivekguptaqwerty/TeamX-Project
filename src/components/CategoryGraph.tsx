"use client";
import { useState } from "react";

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

// New interface for quotes data
interface QuoteData {
  event_id: string;
  event_outcome_id: string;
  max_leverage: number;
  max_wager: number;
  min_wager: number;
  wager: number;
  estimated_payout: number;
  estimated_probability: number;
}

interface CategoryInfoProps {
  eventData: EventData;
  setIsOrderMade: React.Dispatch<React.SetStateAction<boolean>>;
  setQoutesData: React.Dispatch<React.SetStateAction<QuoteData[]>>;
}

const outcomeColors = ["#00FFBB", "#FF5952", "#924DD3", "#26A45B"];

export default function CategoryGraph({
  eventData,
  setIsOrderMade,
  setQoutesData,
}: CategoryInfoProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const makeOrder = async (outcomeId: string) => {
    const orderPayload = {
      event_id: eventData._id,
      event_outcome_id: outcomeId,
      force_leverage: false,
      leverage: 1,
      loan: 0,
      pledge: 10,
      wager: 10,
    };

    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("https://test-api.everyx.io/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderPayload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Order placement failed");
      }

      const responseData = await response.json();
      setIsOrderMade(true);
      setQoutesData(responseData);

      console.log("Order placed successfully", responseData);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "An error occurred while placing the order"
      );

      console.error("Order placement failed", error);
    } finally {
      setIsLoading(false);
    }
  };

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
                  makeOrder(outcome?._id);
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