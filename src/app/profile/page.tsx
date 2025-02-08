"use client";

import React, { useContext, useEffect, useState } from "react";
import { MdCamera } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { AppContext } from "../Context/AppContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Don't forget to import the CSS for the toast styles
import Loader from "@/components/Loader/Loader";
const Profile: React.FC = () => {
  const router = useRouter();
  const { authToken } = useContext(AppContext);

  const [profileImage, setProfileImage] = useState<string | "">("");
  const [UserName, setUserName] = useState<string | "">("");
  const [email, setEmail] = useState<string | "">("");
  const [phone, setPhone] = useState<number | null>(null);
  const [email_verified, setEmail_Verified] = useState<boolean | null>(null);
  const [phone_verified, setPhone_verified] = useState<boolean | null>(null);
  const [Loading, setLoading] = useState<boolean>(true);

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

  const fetchUserProfile = async () => {
    try {
      console.log("authToken in profile", authToken);
      const response = await fetch("https://test-api.everyx.io/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch profile");
      }

      const data = await response.json();
      if (data.display_name) {
        setUserName(data.display_name);
      }
      setEmail(data.email);
      setPhone(data.phone);
      setEmail_Verified(data.email_verified);
      setPhone_verified(data.phone_verified);
      if (data.avatar) {
        setProfileImage(data.avatar);
      }

      console.log(data);
      setLoading(false);
      return data;
    } catch (error) {
      toast.error(
        `Error Occured: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  const UpdateProfile = async () => {
    try {
      const response = await fetch("https://test-api.everyx.io/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          avatar: profileImage,
          display_name: UserName,
          phone: phone?.toString(),
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to update profile: ${response.status} ${response.statusText}`
        );
      }

      toast.success("Update Successful", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        theme: "dark",
      });
      console.log("Update successful!");
    } catch (error) {
      toast.error(
        `Error Occured: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
      // console.error("Error occurred at Profile Screen while Updating:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (authToken !== null) {
        await fetchUserProfile();
      }
    };
    fetchData();
  }, [authToken]);

  if (Loading) {
    return <Loader />;
  }
  return (
    <>
      <Navbar home="Profile" />
      <div className="bg-[#0E0E0E] w-full min-h-screen text-white px-5 pt-5">
        <div className="max-w-md mx-auto ">
          {/* Profile Photo */}
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 mb-5">
              {profileImage ? (
                <Image
                  src={profileImage || "/placeholder.svg"}
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

          {/* Form Fields */}
          <div className="space-y-6 px-5 my-11">
            <div className="border-b border-gray-800">
              <label className="block text-[12px] mb-1 opacity-[27%]">
                Username
              </label>
              <input
                type="text"
                placeholder="Alex Kapawski"
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full bg-transparent py-2 text-[12px] outline-none"
              />
            </div>

            <div className="border-b border-gray-800">
              <label className="block text-[12px] mb-1 opacity-[27%]">
                Phone Number
              </label>
              <div className="flex items-center justify-between">
                <input
                  type="tel"
                  placeholder="81 080-9662-4545"
                  value={phone ?? ""}
                  onChange={(e) => setPhone(Number(e.target.value))}
                  className="flex-1 bg-transparent py-2 text-[12px] outline-none"
                />
                {phone_verified ? (
                  <span className="ml-2 text-green-400 flex items-center text-[9px]">
                    Verified
                  </span>
                ) : (
                  <span className="ml-2 text-red-400 flex items-center text-[9px]">
                    Not Verified
                  </span>
                )}
              </div>
            </div>

            <div className="border-b border-gray-800">
              <label className="block text-[12px] mb-1 opacity-[27%]">
                Email
              </label>
              <div className="flex items-center justify-between">
                <input
                  type="email"
                  placeholder="AlexKapawski@ibtex.org"
                  value={email}
                  className="flex-1 bg-transparent py-2 text-[12px] outline-none"
                  readOnly={true}
                />
                {email_verified ? (
                  <span className="ml-2 text-green-400 flex items-center text-[9px]">
                    Verified
                  </span>
                ) : (
                  <span className="ml-2 text-red-400 flex items-center text-[9px]">
                    Not Verified
                  </span>
                )}
              </div>
            </div>

            <div className="border-b border-gray-800">
              <label className="block text-[12px] mb-1 opacity-[27%]">
                Password
              </label>
              <div className="flex items-center justify-between">
                <div className="flex-1 flex items-center border-b border-gray-800">
                  <FiLock className="w-4 h-4 text-gray-400 mr-2" />
                  <input
                    type="password"
                    placeholder="••••••••••"
                    className="flex-1 bg-transparent py-2 text-[12px] outline-none"
                    readOnly={true}
                  />
                </div>
                <button
                  className="ml-2 text-[9px] underline"
                  type="button"
                  onClick={() => {
                    router.push("/profile/change-password");
                  }}
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 pt-6">
            <button
              className="w-full py-3 px-4 border-[#2DC198] border-[0.25px] rounded-lg transition-colors text-[14px] text-[#2DC198]"
              onClick={UpdateProfile}
            >
              SAVE
            </button>
            <button
              className="w-full flex items-center justify-center transition-colors gap-2 underline text-white text-[12px]"
              type="button"
              onClick={() => {
                router.push("/deposit-withdrawal/history");
              }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
