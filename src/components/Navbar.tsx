import React from 'react'
import { FaWifi } from "react-icons/fa" // Wi-Fi Icon
import { MdSignalCellular4Bar } from "react-icons/md" // Network Signal Icon
import { FaBatteryFull } from "react-icons/fa" // Battery/Charging Icon

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-5 py-3 text-white text-sm">
        <span>9:41</span>
        <div className="flex items-center gap-2">
          {/* Network Signal Icon */}
          <MdSignalCellular4Bar size={18} className="text-white" />

          {/* Wi-Fi Icon */}
          <FaWifi size={18} className="text-white" />

          {/* Battery/Charging Icon */}
          <FaBatteryFull size={18} className="text-white" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
