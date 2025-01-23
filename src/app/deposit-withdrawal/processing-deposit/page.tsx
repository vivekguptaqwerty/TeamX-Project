"use client";

import CurrentCashBalanceCard from "@/components/CurrentCashBalance";
import type React from "react";
// import { useState } from "react";
import styles from "../../../components/ProcessingIcon.module.css";

const DepositProcessing: React.FC = () => {
  // const [inputValue, setInputValue] = useState<string>("");

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value.replace(/[^0-9.]/g, ""); // Allow only numbers and decimal points
  //   setInputValue(`$${value}`);
  // };

  return (
    <div className="bg-[#0E0E0E] w-full min-h-screen text-white pt-5 flex flex-col">
      <CurrentCashBalanceCard />
      <div className="bg-[#262626] bg-opacity-[31%] flex-1 flex flex-col items-center rounded-t-3xl mt-10 py-2">
        <div className="w-16 h-[3px] bg-[#707070] rounded-xl"></div>

        {/* Deposit and Withdrawal Section */}
        <div className="mt-10 flex items-center justify-center w-full px-5">
          <button className="text-white text-[16px]">Deposit :</button>
          <button className="text-[#2DC198] text-[14px] absolute right-5">
            Withdrawal
          </button>
        </div>

        {/* Input Box with Processing loader */}
        <div className="flex justify-center items-end gap-2">
          <div className="flex justify-center mt-5 items-baseline font-bold">
            <span className="text-[34px]">$300 .</span>
            <span className="text-[30px]"> 00</span>
          </div>

          <div className="absolute right-5 mb-1">
            <div className={styles.dotSpinner}>
              <div className={styles.dotSpinnerDot}></div>
              <div className={styles.dotSpinnerDot}></div>
              <div className={styles.dotSpinnerDot}></div>
              <div className={styles.dotSpinnerDot}></div>
              <div className={styles.dotSpinnerDot}></div>
              <div className={styles.dotSpinnerDot}></div>
              <div className={styles.dotSpinnerDot}></div>
              <div className={styles.dotSpinnerDot}></div>
            </div>
          </div>
        </div>

        {/* Currency Box */}
        <div className="bg-[#707070] bg-opacity-[20%] px-5 py-1 rounded-3xl mt-5">
          USD
        </div>
      </div>
    </div>
  );
};

export default DepositProcessing;
