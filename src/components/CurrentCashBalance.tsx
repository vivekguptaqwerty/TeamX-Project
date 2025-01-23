import React from "react";

const CurrentCashBalanceCard: React.FC = () => {
  return (
    <>
      <p className="text-[15px] text-center mt-5">Current Cash Balance</p>
      <div className="flex justify-center mt-5 items-baseline font-bold">
        <span className="text-[34px]">$0 .</span>
        <span className="text-[30px]"> 00</span>
      </div>
    </>
  );
};

export default CurrentCashBalanceCard;
