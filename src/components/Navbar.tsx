'use client';
import { useRouter } from "next/navigation";

interface NavbarProps {
  home: string | boolean; // home can be a string or boolean
}

export default function Navbar({ home }: NavbarProps) {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center p-5">
      <img src="/images/logo.png" alt="Logo" />
      
      {/* Render home if it's a string and not an empty string */}
      {typeof home === "string" && home && <p>{home}</p>}
      
      {/* Conditional rendering for menu or cross icon based on "home" prop */}
      {home === "Home" ? (
        <img
          onClick={() => { router.push("/menu"); }}
          src="/images/menu.svg"
          alt="Menu"
        />
      ) : (
        <img
          onClick={() => { router.push("/"); }}
          src="/images/cross.svg"
          alt="Cross"
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

