"use client";
import React, { useState } from "react";

const Setting: React.FC = () => {
  // Using an object to store the state of each switch individually
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

  const handleSwitchChange = (key: string) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="bg-[#0E0E0E] w-full min-h-screen text-white px-5 pt-4 pb-28">
      {/* Notification */}
      <h2 className="font-medium text-[17px] text-left">Notifications</h2>
      <div className="my-5 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <p className="text-[14px]">Withdrawal successful!</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={switchStates.withdrawalSuccess}
              onChange={() => handleSwitchChange("withdrawalSuccess")}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[14px]">There was a problem with your deposit.</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={switchStates.depositProblem}
              onChange={() => handleSwitchChange("depositProblem")}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[14px]">
            There was a problem with your withdrawal.
          </p>
          <label className="switch">
            <input
              type="checkbox"
              checked={switchStates.withdrawalProblem}
              onChange={() => handleSwitchChange("withdrawalProblem")}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[14px]">Achievement unlocked!</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={switchStates.achievementUnlocked}
              onChange={() => handleSwitchChange("achievementUnlocked")}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[14px]">You have leveled up!</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={switchStates.leveledUp}
              onChange={() => handleSwitchChange("leveledUp")}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[14px]">You are in the top n%!</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={switchStates.topPercentage}
              onChange={() => handleSwitchChange("topPercentage")}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      {/* Favourites */}
      <h2 className="font-medium text-[17px] text-left mt-10">Favourites</h2>
      <div className="my-5 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <p className="text-[14px]">Cryptocurrency</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={switchStates.cryptocurrency}
              onChange={() => handleSwitchChange("cryptocurrency")}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[14px]">Economics</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={switchStates.economics}
              onChange={() => handleSwitchChange("economics")}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[14px]">Government</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={switchStates.government}
              onChange={() => handleSwitchChange("government")}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[14px]">Markets</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={switchStates.markets}
              onChange={() => handleSwitchChange("markets")}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[14px]">Politics</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={switchStates.politics}
              onChange={() => handleSwitchChange("politics")}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[14px]">Pop Culture</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={switchStates.popCulture}
              onChange={() => handleSwitchChange("popCulture")}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      {/*  */}
      <h2 className="font-medium text-[17px] text-left mt-10">Trades</h2>

      <div className="flex flex-col mt-5 gap-5">
        <div>
          <p className="text-[14px] text-white opacity-[27%]">
            Default wager size
          </p>
          <input
            type="text"
            placeholder="Alex Kapawski"
            className="w-full mt-2 bg-transparent border-b-[1px] text-[14px] text-white pb-1 border-[#707070] outline-none"
          />
        </div>
        <div>
          <p className="text-[14px] text-white opacity-[27%]">Default</p>
          <input
            type="number"
            placeholder="81 080-9662-4545"
            className="w-full mt-2 bg-transparent border-b-[1px] text-[14px] text-white pb-1 border-[#707070] outline-none"
          />
        </div>
        <div>
          <p className="text-[14px] text-white opacity-[27%]">
            Market Impact Warning Level
          </p>
          <input
            type="email"
            placeholder="AlexKapawski@ibtex.org"
            className="w-full mt-2 bg-transparent border-b-[1px] text-[14px] text-white pb-1 border-[#707070] outline-none"
          />
        </div>

        <div className="px-5 mt-10">
          <button
            type="button"
            className="w-full bg-transparent border-[0.25px] border-[#2DC198] rounded-lg h-14 flex justify-center items-center"
          >
            <span className="text-[16px] text-[#2DC198]">SAVE</span>
          </button>

          <div className="text-center mt-5 underline ">Back</div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
