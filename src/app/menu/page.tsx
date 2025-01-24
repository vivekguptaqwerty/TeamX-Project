"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Menu() {
  return (
    <div>
      <Navbar home={"Menu"} />
      <div className="mt-5 flex flex-row-reverse">
        <ul className="flex flex-col w-[42%]">
          {/* Home */}
          <Link
            href="/"
            className="pl-4 py-3 flex items-center gap-4 bg-[#151515] text-white hover:bg-white hover:bg-opacity-[10%] hover:text-black transition"
          >
            <div className="bg-white w-[2px] h-4"></div>Home
          </Link>

          {/* Portfolio */}
          <Link
            href="/deposit-withdrawal/history"
            className="pl-4 py-3 flex items-center gap-4 bg-[#151515] text-[#707070] hover:bg-white hover:bg-opacity-[10%]  hover:text-black transition"
          >
            <div className="bg-white w-[2px] h-4"></div>Portfolio
          </Link>

          {/* Profile */}
          <Link
            href="/profile"
            className="pl-4 py-3 flex items-center gap-4 bg-[#151515] text-[#707070] hover:bg-white hover:bg-opacity-[10%]  hover:text-black transition"
          >
            <div className="bg-white w-[2px] h-4"></div>Profile
          </Link>

          {/* Setting */}
          <Link
            href="/settings"
            className="pl-4 py-3 flex items-center gap-4 bg-[#151515] text-[#707070] hover:bg-white hover:bg-opacity-[10%]  hover:text-black transition"
          >
            <div className="bg-white w-[2px] h-4"></div>Setting
          </Link>

          {/* Help */}
          <Link
            href="/help"
            className="pl-4 py-3 flex items-center gap-4 bg-[#151515] text-[#707070] hover:bg-white hover:bg-opacity-[10%]  hover:text-black transition"
          >
            <div className="bg-white w-[2px] h-4"></div>Help
          </Link>
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
