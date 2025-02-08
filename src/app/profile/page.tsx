"use client";

import React, { useContext, useEffect, useCallback, useState } from "react";
import { MdCamera } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { AppContext } from "../Context/AppContext";

const Profile: React.FC = () => {
  const router = useRouter();
  const { authToken } = useContext(AppContext);

  const [profileImage, setProfileImage] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<number | null>(null);
  const [emailVerified, setEmailVerified] = useState<boolean>(false);
  const [phoneVerified, setPhoneVerified] = useState<boolean>(false);

  const fetchUserProfile = useCallback(async () => {
    if (!authToken) return;

    try {
      const response = await fetch("https://test-api.everyx.io/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch profile: ${response.status}`);
      }

      const data = await response.json();
      setUserName(data.display_name || "");
      setEmail(data.email || "");
      setPhone(data.phone);
      setEmailVerified(data.email_verified || false);
      setPhoneVerified(data.phone_verified || false);
      setProfileImage(data.avatar || "");
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  }, [authToken]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateProfile = async () => {
    if (!authToken) return;

    try {
      const response = await fetch("https://test-api.everyx.io/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          avatar: profileImage,
          display_name: userName,
          phone: phone,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update profile: ${response.status}`);
      }
      
      // Refresh profile data after successful update
      await fetchUserProfile();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  const VerificationStatus: React.FC<{ isVerified: boolean }> = ({ isVerified }) => (
    <span className={`ml-2 ${isVerified ? 'text-green-400' : 'text-red-400'} flex items-center text-[9px]`}>
      {isVerified ? 'Verified' : 'Not Verified'}
    </span>
  );

  return (
    <>
      <Navbar home="Profile" />
      <div className="bg-[#0E0E0E] w-full min-h-screen text-white px-5 pt-5">
        <div className="max-w-md mx-auto">
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 mb-5">
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt="Profile"
                  fill
                  className="rounded-full object-top object-cover"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center">
                  <MdCamera className="w-8 h-8 text-gray-400" />
                </div>
              )}
            </div>
            <label className="cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <span className="text-[13px] py-2 px-5 border-[1px] border-[#707070] rounded-lg">
                Upload Photo
              </span>
            </label>
          </div>

          <div className="space-y-6 px-5 my-11">
            <FormField
              label="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Alex Kapawski"
            />

            <FormField
              label="Phone Number"
              value={phone?.toString() ?? ""}
              onChange={(e) => setPhone(Number(e.target.value))}
              placeholder="81 080-9662-4545"
              type="tel"
              append={<VerificationStatus isVerified={phoneVerified} />}
            />

            <FormField
              label="Email"
              value={email}
              readOnly
              placeholder="AlexKapawski@ibtex.org"
              type="email"
              append={<VerificationStatus isVerified={emailVerified} />}
            />

            <div className="border-b border-gray-800">
              <label className="block text-[12px] mb-1 opacity-[27%]">
                Password
              </label>
              <div className="flex items-center justify-between">
                <div className="flex-1 flex items-center">
                  <FiLock className="w-4 h-4 text-gray-400 mr-2" />
                  <input
                    type="password"
                    placeholder="••••••••••"
                    className="flex-1 bg-transparent py-2 text-[12px] outline-none"
                    readOnly
                  />
                </div>
                <button
                  className="ml-2 text-[9px] underline"
                  type="button"
                  onClick={() => router.push("/profile/change-password")}
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <button
              className="w-full py-3 px-4 border-[#2DC198] border-[0.25px] rounded-lg transition-colors text-[14px] text-[#2DC198]"
              onClick={updateProfile}
            >
              SAVE
            </button>
            <button
              className="w-full flex items-center justify-center transition-colors gap-2 underline text-white text-[12px]"
              type="button"
              onClick={() => router.push("/deposit-withdrawal/history")}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

interface FormFieldProps {
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  readOnly?: boolean;
  append?: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  readOnly,
  append
}) => (
  <div className="border-b border-gray-800">
    <label className="block text-[12px] mb-1 opacity-[27%]">{label}</label>
    <div className="flex items-center justify-between">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className="flex-1 bg-transparent py-2 text-[12px] outline-none"
      />
      {append}
    </div>
  </div>
);

export default Profile;