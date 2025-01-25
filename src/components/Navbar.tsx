"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar({ home }: { home: string }) {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center p-5 bg-[#0E0E0E]">
      <Image onClick={()=>{router.push("/")}} src="/images/logo.png" alt="Logo image" width={20} height={20} />
      {home && <p>{home}</p>}
      {[
        "Home",
        "Portfolio",
        "Deposit",
        "Withdrawal",
        "Profile",
        "Terms",
        "Setting",
        "Help",
        "",
      ].includes(home) ? (
        <Image
          onClick={() => {
            router.push("/menu");
          }}
          src="/images/menu.svg"
          alt=""
          width={20}
          height={20}
        />
      ) : (
        <Image
          onClick={() => {
            router.back();
          }}
          src="/images/cross.svg"
          alt=""
          width={20}
          height={20}
        />
      )}
    </div>
  );
}
// import React from 'react'
// import { FaWifi } from "react-icons/fa" // Wi-Fi Icon
// import { MdSignalCellular4Bar } from "react-icons/md" // Network Signal Icon
// import { FaBatteryFull } from "react-icons/fa" // Battery/Charging Icon

// const Navbar = () => {
//   return (
//     <div>
//       <div className="flex justify-between items-center px-5 py-3 text-white text-sm">
//         <span>9:41</span>
//         <div className="flex items-center gap-2">
//           {/* Network Signal Icon */}
//           <MdSignalCellular4Bar size={18} className="text-white" />

//           {/* Wi-Fi Icon */}
//           <FaWifi size={18} className="text-white" />

//           {/* Battery/Charging Icon */}
//           <FaBatteryFull size={18} className="text-white" />
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Navbar
