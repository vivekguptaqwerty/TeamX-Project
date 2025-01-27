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

  const isSignup = () => {
    const { username, phone, email, password, confirmPassword } = formData;

    // Basic validation (you can expand as needed)
    if (!username || !phone || !email || !password || password !== confirmPassword) {
      alert("Please fill all the fields correctly.");
      return;
    }

    // Simulate API call or signup process
    console.log("Signup successful:", formData);

    // Redirect to the email verification page
    window.location.href = "/signup/email-verification";
  };

  return (
    <>
      <Navbar home="Signup" />
      <div className="h-screen bg-[#0E0E0E] flex flex-col w-full mx-auto mb-5">
        <div className="text-center text-white text-2xl font-bold mt-6">Sign Up</div>
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

          {/* Phone */}
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

        {/* Prediction Market Info */}
        <div className="px-6 mt-6">
          <div className="text-white text-sm text-justify leading-relaxed">
            A prediction market is a platform where participants can trade based on the outcomes of future events...
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mt-6 px-6">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 border border-gray-700 rounded bg-transparent"
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
            className="w-full bg-[#707070] bg-opacity-10 text-white py-3 rounded-lg text-sm"
            onClick={isSignup}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
