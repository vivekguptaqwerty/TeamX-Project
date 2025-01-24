import Image from "next/image";
import React from "react";
import SuccessIcon from "../../../../../public/Icons/SuccessIcon.png";
import Navbar from "@/components/Navbar";

const success: React.FC = () => {
  return (
    <>
      <Navbar home="Withdrawal" />
      <div className="bg-[#0E0E0E] w-full min-h-screen text-white pt-5 flex flex-col ">
        <p className="text-[15px] text-center mt-5">Current Cash Balance</p>
        <div className="flex justify-center mt-5 items-baseline font-bold">
          <span className="text-[34px]">$300 .</span>
          <span className="text-[30px]"> 00</span>
        </div>

        <div className="bg-[#262626] bg-opacity-[31%] flex-1 flex flex-col items-center rounded-t-3xl mt-10 py-2 px-5">
          <div className="w-16 h-[3px] bg-[#707070] rounded-xl"></div>

          {/* Withdrawal and Withdrawal Section */}
          <div className="mt-10 flex items-center justify-center w-full px-5">
            <button className="text-white text-[16px]">Withdrawal :</button>
          </div>

          <div className="mt-20 mb-10 ">
            <Image src={SuccessIcon} alt="SuccessIcon" />
          </div>
          <div>
            <p className="text-center text-[22px] font-light">
              Payments successful !
            </p>
            <p className="text-center text-[15px] font-semibold">$300.00 USD</p>
          </div>

          <button className="w-full py-3 px-4 border-[#2DC198] border-[0.25px] rounded-lg transition-colors text-[14px] text-[#2DC198] mt-10">
            Done
          </button>
        </div>
      </div>
    </>
  );
};

export default success;
