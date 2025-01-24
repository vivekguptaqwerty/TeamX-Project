"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

export default function Menu() {
  const { selectedMenu, setSelectedMenu } = useContext(AppContext);
  const navbarItems = [
    { name: "Home", link: "/" },
    { name: "Portfolio", link: "/deposit-withdrawal/history" },
    { name: "Profile", link: "/profile" },
    { name: "Setting", link: "/setting" },
    { name: "Help", link: "/help" }
  ];


  return (
    <div>
      <Navbar home="Menu" />
      <div className="mt-5 flex flex-row-reverse">
        <ul className="flex flex-col w-[42%]">
          {navbarItems.map((item, index) => (
            <Link
              key={index}
              href={`${item.link}`}
              className={`pl-8 py-3 relative ${selectedMenu === item.name
                  ? "bg-[#151515] text-white"
                  : "text-white hover:bg-white hover:bg-opacity-[10%] hover:text-black"
                }`}
              onClick={() => setSelectedMenu(item.name)}
            >
              {selectedMenu === item.name && <div className="bg-white w-[2px] h-4 absolute top-4 left-4"></div>}
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
      <div className="p-5">
        <button className="text-[#fff] text-sm border border-[#fff] w-full py-2 rounded-md">
          <Link href="/Signup">LogOut</Link>
        </button>
      </div>
    </div>
  );
}
