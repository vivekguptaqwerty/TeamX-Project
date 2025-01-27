"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

const Verification: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/auth/signup/success"); // Redirects to signup/success after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, [router]);

  const handleResendEmail = () => {
    alert("Resending email...");
  };

  return (
    <div className="h-screen w-screen bg-black flex flex-col max-w-[430px] mx-auto">
      <Navbar home="Verify Email" />
      <div className="flex flex-col items-center justify-center text-white px-4">
        {/* Title */}
        <h1 className="text-2xl font-bold mt-16">Verify Email</h1>

        {/* Confirmation Message */}
        <p className="text-center text-sm mt-8">
          We sent a confirmation email to:
        </p>

        {/* Email Address */}
        <p className="text-lg font-light mt-2">AlexKapawski@gmail.com</p>

        {/* Instruction */}
        <div className="text-center text-sm leading-6 mt-10">
          <p>Check your inbox and click on the confirmation link to verify</p>
          <p>your account and be able to deposit to it.</p>
        </div>

        {/* Resend Email */}
        <button
          className="mt-8 underline text-sm text-gray-300 hover:text-white"
          onClick={handleResendEmail}
        >
          Resend Email
        </button>
      </div>
    </div>
  );
};

export default Verification;
