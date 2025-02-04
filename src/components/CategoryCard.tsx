import { AppContext } from "@/app/Context/AppContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface TraderInfo {
  max_leverage: number;
  estimated_payout: number;
}

export default function CategoryCard({ item }) {  
  const router = useRouter();
  const { setIsLoading } = useContext(AppContext);

  // Calculate max leverage and estimated payout
  const maxLeverage = Math.max(
    ...item.outcomes?.map((outcome: { trader_info: TraderInfo }) => outcome.trader_info.max_leverage)
  );

  const maxEstimatedPayout = Math.max(
    ...item.outcomes?.map((outcome: { trader_info: TraderInfo }) => outcome.trader_info.estimated_payout)
  );

  const handleNavigation = async () => {
    try {
      setIsLoading(true);
      await router.push("/event/category/1");
    } catch (error) {
      console.error("Navigation error:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <div
      onClick={handleNavigation}
      className="rounded-xl bg-[#161616] overflow-hidden cursor-pointer"
    >
      {/* Card Header */}
      <div className="flex gap-3 items-center pt-3 px-3">
        <Image src="/images/image.png" alt="" height={70} width={70} />
        <p className="text-sm">{item.name}</p>
      </div>

      {/* Card Details */}
      <div className="flex mt-3 justify-between pl-3 pr-5">
        <div className="flex gap-3 items-center">
          <Image
            src="/images/clock.svg"
            alt="Clock icon"
            width={16}
            height={16}
            className="w-4"
          />
          1d11h
        </div>
        <span className="text-[19px] text-[#00FFB8]">{maxEstimatedPayout.toFixed(0)}%</span>
        <span className="text-[19px] text-[#00FFB8]">{maxLeverage.toFixed(1)}x</span>
        <button className="border border-[#00FFB8] px-4 text-xs text-[#00FFB8] rounded-md">
          {item?.category?.name}
        </button>
      </div>

      {/* Card Footer */}
      <div className="flex mt-4 gap-3 text-xs items-center bg-[#1D1D1D] pr-5 pl-3 py-2 text-[#A1A1A1]">
        <Image src="/images/currency.png" alt="" height={20} width={20} />
        $15,301,225 Vol.
      </div>
    </div>
  );
}