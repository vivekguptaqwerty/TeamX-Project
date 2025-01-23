"use client";

import type React from "react";
import { useState } from "react";
// import { MdArrowBack } from "react-icons/md";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import {useRouter} from 'next/navigation'


const PasswordChange: React.FC = () => {
  const router = useRouter();
  const [passwordVisibility, setPasswordVisibility] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const togglePasswordVisibility = (field: "old" | "new" | "confirm") => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const PasswordInput = ({
    label,
    field,
    placeholder,
  }: {
    label: string;
    field: "old" | "new" | "confirm";
    placeholder: string;
  }) => (
    <div className="border-b border-gray-800">
      <label className="block text-[12px] mb-1 opacity-[27%]">{label}</label>
      <div className="flex items-center justify-between">
        <input
          type={passwordVisibility[field] ? "text" : "password"}
          placeholder={placeholder}
          className="flex-1 bg-transparent py-2 text-[12px] outline-none"
        />
        <button
          onClick={() => togglePasswordVisibility(field)}
          className="ml-2 text-gray-400"
        >
          {passwordVisibility[field] ? (
            <IoEyeOutline size={18} />
          ) : (
            <IoEyeOffOutline size={18} />
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-[#0E0E0E] w-full min-h-screen text-white px-5 pt-5">
      <p className="text-center text-[17px] font-medium">Change Password</p>
      {/* Form Fields */}
      <div className="space-y-6 px-5 my-32">
        <PasswordInput
          label="Old Password"
          field="old"
          placeholder=".........."
        />
        <PasswordInput
          label="New Password"
          field="new"
          placeholder=".........."
        />
        <PasswordInput
          label="Confirm New Password"
          field="confirm"
          placeholder=".........."
        />
      </div>

      {/* Action Buttons */}
      <div className="space-y-4 pt-6">
        <button className="w-full py-3 px-4 border-[#2DC198] border-[0.25px] rounded-lg transition-colors text-[14px] text-[#2DC198]">
          SAVE
        </button>
        <button className="w-full flex items-center justify-center transition-colors gap-2 underline text-white text-[12px]" type="button" onClick={()=>{router.push("/profile")}}>
          Back
        </button>
      </div>
    </div>
  );
};

export default PasswordChange;
