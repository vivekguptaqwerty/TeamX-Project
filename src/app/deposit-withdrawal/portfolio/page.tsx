"use client";

import Image from "next/image";
import React from "react";
import ProfileImage from "../../../../public/Images/profileImage.png";
import settingIcon from "../../../../public/Icons/settingIcon.png";
import CashWithdrawalCategories from "@/components/CashWithdrawalCategories";
import { useRouter } from "next/navigation";
import CurrentCashBalanceCard from "@/components/CurrentCashBalance";

interface BetEntry {
  id: string;
  question: string;
  timestamp: string;
  amount: number;
  status: "failed" | "success";
}

const Portfolio: React.FC = () => {
  const router = useRouter();
  const bets: BetEntry[] = [
    {
      id: "1",
      question:
        "Who will make it to the Australian OpenMen's Singles semifinals ?",
      timestamp: "Nov 2 2024 14:05",
      amount: -500,
      status: "failed",
    },
    {
      id: "2",
      question:
        "Who will make it to the Australian OpenMen's Singles semifinals ?",
      timestamp: "Nov 2 2024 14:05",
      amount: 150,
      status: "success",
    },
    {
      id: "3",
      question:
        "Who will make it to the Australian OpenMen's Singles semifinals ?",
      timestamp: "Nov 2 2024 14:05",
      amount: 150,
      status: "success",
    },
  ];

  return (
    <div className="bg-[#0E0E0E] w-full min-h-screen text-white px-5 pt-4 pb-5">
      <div className="flex justify-center items-center mt-5 relative">
        {/* Parent container with relative positioning */}
        <Image
          src={ProfileImage}
          alt="User Profile Pic"
          className="relative rounded-full"
        />
        <Image
          src={settingIcon}
          alt="Setting icon"
          className="absolute top-1 left-[65%]"
          onClick={() => {
            router.push("/profile");
          }}
        />
      </div>
      <CurrentCashBalanceCard />
      <div className="my-10">
        <CashWithdrawalCategories />
      </div>

      <p className="text-[14px] text-center font-semibold">Results :</p>

      <div className="max-w-2xl mx-auto space-y-8 mt-10">
        {bets.map((bet) => (
          <div key={bet.id} className="space-y-3 mb-10">
            <div className="inline-block">
              <span
                className={`
                px-3 py-1 rounded text-sm
                ${
                  bet.status === "failed"
                    ? "text-orange-500 border border-orange-500"
                    : "text-[#000] bg-[#00FFB8]"
                }
              `}
              >
                {bet.status === "failed" ? "Failed" : "Success"}
              </span>
            </div>

            <h2 className="text-white text-lg font-medium">{bet.question}</h2>

            <div className="flex justify-between items-center ">
              <p className="text-gray-500 text-sm">{bet.timestamp}</p>
              <p
                className={`text-xl font-bold ${
                  bet.amount < 0 ? "text-orange-500" : "text-[#00FFB8]"
                }`}
              >
                $ {bet.amount.toFixed(2)}(USDT)
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
