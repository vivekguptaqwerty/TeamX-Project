"use client";

import Image from "next/image";
import React from "react";
import ProfileImage from "../../../../public/Images/profileImage.png";
import settingIcon from "../../../../public/Icons/settingIcon.png";
import CashWithdrawalCategories from "@/components/CashWithdrawalCategories";
import { useRouter } from "next/navigation";
import CurrentCashBalanceCard from "@/components/CurrentCashBalance";

interface Transaction {
  id: string;
  date: string;
  amount: number;
  type: "deposit" | "withdrawal";
}

const History: React.FC = () => {
  const router = useRouter();
  const transactions: Transaction[] = [
    { id: "1", date: "Nov 2 2024 14:05", amount: 500.0, type: "deposit" },
    { id: "2", date: "Nov 2 2024 14:05", amount: 50.0, type: "withdrawal" },
    { id: "3", date: "Nov 2 2024 14:05", amount: 500.0, type: "deposit" },
    { id: "4", date: "Nov 2 2024 14:05", amount: 50.0, type: "withdrawal" },
    { id: "5", date: "Nov 2 2024 14:05", amount: 50.0, type: "withdrawal" },
    { id: "6", date: "Nov 2 2024 14:05", amount: 50.0, type: "withdrawal" },
    { id: "7", date: "Nov 2 2024 14:05", amount: 50.0, type: "withdrawal" },
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

      <p className="text-[14px] text-center font-semibold">
        Deposit ＆Withdrawal History:
      </p>

      <div className="mx-5 mt-10">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between text-white mb-10"
          >
            <div className="space-y-1">
              <p className="text-sm text-gray-400">{transaction.date}</p>
              <p className="text-lg font-medium">
                $ {transaction.amount.toFixed(2)}
                <span className="text-sm text-gray-400 ml-1">(USDT)</span>
              </p>
            </div>
            <button
              variant={transaction.type === "deposit" ? "outline" : "default"}
              className={`
                p-2 rounded w-20 text-[11px]
                ${
                  transaction.type === "deposit"
                    ? "border border-[#5DFF00] text-[#5DFF00]"
                    : "bg-[#5DFF00] text-black"
                }

              `}
            >
              {transaction.type === "deposit" ? "Deposit" : "Withdrawal"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
