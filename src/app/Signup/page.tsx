"use client";

import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    referralCode: "",
    country: "",
  });

  useEffect(() => {
    setFormData({
      username: "Alex Kapawski",
      phone: "080-9662-4545",
      email: "AlexKapawski@gmail.com",
      password: "***********",
      confirmPassword: "***********",
      referralCode: "JszRVaOeeYeR",
      country: "Japan",
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="h-screen w-screen bg-black flex flex-col max-w-[430px] mx-auto">
      <Navbar home={"Signup"} />

      

     

      {/* Signup Form Section */}
      <div className="flex flex-col px-6 text-white space-y-6 mt-6">
        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-opacity-70 text-sm mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-700 text-white text-sm outline-none"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-opacity-70 text-sm mb-1">
            Phone Number
          </label>
          <div className="flex items-center gap-2">
            <span className="text-opacity-35 text-sm">+1</span>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 bg-transparent border-b border-gray-700 text-white text-sm outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-opacity-70 text-sm mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-700 text-white text-sm outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-opacity-70 text-sm mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-700 text-white text-sm outline-none"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-opacity-70 text-sm mb-1">
            Password (Again)
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-700 text-white text-sm outline-none"
          />
        </div>

        {/* Referral Code */}
        <div className="mb-4">
          <label htmlFor="referralCode" className="block text-opacity-70 text-sm mb-1">
            Referral Code
          </label>
          <input
            type="text"
            id="referralCode"
            placeholder="Enter referral code"
            value={formData.referralCode}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-700 text-white text-sm outline-none"
          />
        </div>

        {/* Country */}
        <div className="mb-4">
          <label htmlFor="country" className="block text-opacity-70 text-sm mb-1">
            Country
          </label>
          <input
            type="text"
            id="country"
            placeholder="Enter your country"
            value={formData.country}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-700 text-white text-sm outline-none"
          />
        </div>
      </div>

      {/* Prediction Market Information */}
      <div className="px-6 mt-6">
        
        <div className="text-white text-sm text-justify leading-relaxed">
          A prediction market is a platform where participants can trade based on
          the outcomes of future events, such as elections, sports, or economic
          indicators. The market prices reflect the collective probability of an
          event occurring, aggregating diverse information and insights from
          participants. It is useful for its ability to provide real-time,
          accurate forecasts based on crowd wisdom and incentivized
          decision-making.
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="mt-6 px-6">
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="terms"
            className="w-4 h-4 border border-gray-700 rounded bg-transparent"
            title="Accept terms and conditions"
          />
          <label htmlFor="terms" className="text-opacity-50 text-sm">
            I have read and agree to these terms
          </label>
        </div>
      </div>

      {/* Signup Button */}
      <div className="mt-8 px-6">
        <button
          type="submit"
          className="w-full bg-green-600 bg-opacity-70 text-white py-3 rounded-lg text-sm"
          title="Sign Up Button"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Page;
