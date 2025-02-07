import { AppContext } from "@/app/Context/AppContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

// Define types for the properties
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

interface Item {
  _id: string;
  name: string;
  description: string;
  category: Category;
  ends_at: string;
  outcomes: Outcome[];
  event_images_url: string[];
}

interface CategoryCardProps {
  item: Item;
}

export default function CategoryCard({ item }: CategoryCardProps) {
  const [hideGraph, setHideGraph] = useState(false);
  const router = useRouter();
  const {
    setIsLoading,
    calculateMaxLeverage,
    calculateMaxEstimatedPayout,
    formatDate,
  } = useContext(AppContext);

  const outcomeColors = ["#00FFBB", "#FF5952", "#924DD3", "#26A45B"];

  const handleNavigation = async () => {
    try {
      setIsLoading(true);
      await router.push(`/events/${item?._id}`);
    } catch (error) {
      console.error("Navigation error:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="rounded-xl overflow-hidden cursor-pointer">
      {/* Card Header */}
      <div onClick={handleNavigation} className="relative flex gap-3 items-center h-52">
        <img
          className="h-full w-full object-cover"
          src={item?.event_images_url[0]}
          alt={item?.name || "Event Image"}
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Card Details */}
      <div className="flex mt-3 gap-3">
        <button className="border border-[#00FFB8] px-4 py-1 text-xs text-[#00FFB8] rounded-sm">
          {item?.category?.name?.split(" ")[0]}
        </button>
        <p className="text-[#00FFB8]">{formatDate(item?.ends_at)}</p>
      </div>
      <div className="pt-4">
        <p className="font-light">{item?.description}</p>
      </div>
      <div className="flex gap-3 mt-5 leading-6 mb-5">
        <div className="w-1/2 px-4 py-3 bg-[#131313] rounded-md">
          <p className="text-[#2DC198] text-[24px] font-light">
            {item?.outcomes?.length
              ? `${calculateMaxLeverage(item.outcomes)}x`
              : "N/A"}
          </p>
          <p className="text-[13px]">Maximum leverage:</p>
        </div>
        <div className="w-1/2 px-4 py-3 bg-[#131313] rounded-md">
          <p className="text-[#2DC198] text-[24px] font-light">
            {calculateMaxEstimatedPayout(item?.outcomes).toFixed(0)}%
          </p>
          <p className="text-[13px]">Maximum return:</p>
        </div>
      </div>
      {hideGraph && (
        <div className="flex flex-col gap-5 mb-7">
          {item?.outcomes.map((outcome: Outcome, index: number) => (
            <div key={outcome._id} className="flex flex-col gap-1">
              <p className="text-[19px] font-light">
                {String.fromCharCode(65 + index)}. {outcome.name.charAt(0).toUpperCase() + outcome.name.slice(1)}
              </p>
              <div className="flex justify-between items-center gap-2">
                <div
                  className="h-[15px] rounded-lg"
                  style={{
                    backgroundColor: outcomeColors[index],
                    width: `${Math.round(outcome.trader_info.estimated_probability * 100)}%`,
                  }}
                ></div>
                <p className="text-[19px] font-light">
                  {Math.round(outcome.trader_info.estimated_probability * 100)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => setHideGraph(!hideGraph)}
        className="text-[#00FFBB] text-sm border border-[#00FFBB] w-full rounded-md mb-2 py-[10px]"
      >
        {!hideGraph ? "View More" : "View Less"}
      </button>
    </div>
  );
}
