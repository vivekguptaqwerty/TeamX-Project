'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";  // Import useRouter
import "./settings.css";
import Navbar from "@/components/Navbar";

const Setting: React.FC = () => {
  const router = useRouter(); // Initialize useRouter
  
  const [switchStates, setSwitchStates] = useState({
    withdrawalSuccess: false,
    depositProblem: false,
    withdrawalProblem: false,
    achievementUnlocked: false,
    leveledUp: false,
    topPercentage: false,
    cryptocurrency: false,
    economics: false,
    government: false,
    markets: false,
    politics: false,
    popCulture: false,
  });

  const handleSwitchChange = (key: keyof typeof switchStates) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <>
      <Navbar home="Setting" />
      <div className="bg-[#0E0E0E] w-full min-h-screen text-white px-5 pt-4 pb-28">
        {/* Notifications */}
        <h2 className="font-medium text-[17px] text-left">Notifications</h2>
        <div className="my-5 flex flex-col gap-5">
          {[
            { key: "withdrawalSuccess", label: "Withdrawal successful!" },
            { key: "depositProblem", label: "There was a problem with deposit." },
            { key: "withdrawalProblem", label: "There was a problem with withdrawal." },
            { key: "achievementUnlocked", label: "Achievement unlocked!" },
            { key: "leveledUp", label: "You have leveled up!" },
            { key: "topPercentage", label: "You are in the top n%!" },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between">
              <label htmlFor={item.key} className="text-[14px]">
                {item.label}
              </label>
              <label className="switch" title={`Toggle ${item.label}`}>
                <input
                  id={item.key}
                  type="checkbox"
                  checked={switchStates[item.key as keyof typeof switchStates]}
                  onChange={() => handleSwitchChange(item.key as keyof typeof switchStates)}
                />
                <span className="slider round"></span>
              </label>
            </div>
          ))}
        </div>

        {/* Favourites */}
        <h2 className="font-medium text-[17px] text-left mt-10">Favourites</h2>
        <div className="my-5 flex flex-col gap-5">
          {[
            { key: "cryptocurrency", label: "Cryptocurrency" },
            { key: "economics", label: "Economics" },
            { key: "government", label: "Government" },
            { key: "markets", label: "Markets" },
            { key: "politics", label: "Politics" },
            { key: "popCulture", label: "Pop Culture" },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between">
              <label htmlFor={item.key} className="text-[14px]">
                {item.label}
              </label>
              <label className="switch" title={`Toggle ${item.label}`}>
                <input
                  id={item.key}
                  type="checkbox"
                  checked={switchStates[item.key as keyof typeof switchStates]}
                  onChange={() => handleSwitchChange(item.key as keyof typeof switchStates)}
                />
                <span className="slider round"></span>
              </label>
            </div>
          ))}
        </div>

        {/* Trades */}
        <h2 className="font-medium text-[17px] text-left mt-10">Trades</h2>
        <div className="flex flex-col mt-5 gap-5">
          <div>
            <label htmlFor="defaultWager" className="text-[14px] text-white opacity-[27%]">
              Default wager size
            </label>
            <input
              id="defaultWager"
              type="text"
              placeholder="Enter wager size"
              className="w-full mt-2 bg-transparent border-b-[1px] text-[14px] text-white pb-1 border-[#707070] outline-none"
            />
          </div>
          <div>
            <label htmlFor="defaultNumber" className="text-[14px] text-white opacity-[27%]">
              Default number
            </label>
            <input
              id="defaultNumber"
              type="number"
              placeholder="Enter a number"
              className="w-full mt-2 bg-transparent border-b-[1px] text-[14px] text-white pb-1 border-[#707070] outline-none"
            />
          </div>
          <div>
            <label htmlFor="marketImpact" className="text-[14px] text-white opacity-[27%]">
              Market Impact Warning Level
            </label>
            <input
              id="marketImpact"
              type="email"
              placeholder="Enter email address"
              className="w-full mt-2 bg-transparent border-b-[1px] text-[14px] text-white pb-1 border-[#707070] outline-none"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="px-5 mt-10">
          <button
            type="button"
            className="w-full bg-transparent border-[0.25px] border-[#2DC198] rounded-lg h-14 flex justify-center items-center"
          >
            <span className="text-[16px] text-[#2DC198]">SAVE</span>
          </button>

          {/* Functional Back Button */}
          <div
            className="text-center mt-5 underline cursor-pointer"
            onClick={() => router.back()} // Go back to the previous page
          >
            Back
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
