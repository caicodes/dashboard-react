import React from "react"
import Logo from "./SvgLogo"
import { FiActivity } from "react-icons/fi"
import { AiOutlineRadarChart, AiOutlineDashboard } from "react-icons/ai"
import { RiDatabaseLine } from "react-icons/ri"
import { TbPhoneCalling } from "react-icons/tb"
import { VscSymbolClass } from "react-icons/vsc"

const Menu = () => {
  const linksList = [
    "Southwest Central",
    "Outside Sales Team",
    "Watertown Servers",
  ]
  const linksList2 = [
    "North Salt Lake / Ogden",
    "South Salt Lake / Midvale",
    "Lehi / Orem",
    "Provo / Spanish Fork",
  ]
  const linksList3 = [
    "Idaho Western Range",
    "Wasatch Valley",
    "Central East",
    "Central West",
    "Southwest Region",
    "Northern California",
  ]
  return (
    <div className="">
      <div className="p-8 mt-4">
        <Logo />
      </div>
      <ul className="ml-5 mt-5  menu w-96 p-2 rounded-box">
        <div className="uppercase text-sm mx-2 my-5">administration</div>

        <li>
          <a href="/" className="menu-link">
            <AiOutlineDashboard className="h-5 w-5" />
            Dashboard Main
          </a>
        </li>
        <li>
          <a href="/" className="menu-link">
            <FiActivity className="h-5 w-5" />
            Recent Activity
          </a>
        </li>
        <li>
          <a href="/" className="menu-link">
            <AiOutlineRadarChart className="h-5 w-5" />
            Sales by Quadrant Radar Charts
          </a>
        </li>
        <div className="uppercase text-sm mx-2 my-5">data centers</div>
        {linksList.map((link) => (
          <li key={link}>
            <a href="/" className="menu-link">
              <RiDatabaseLine className="h-5 w-5" />
              {link}
            </a>
          </li>
        ))}
        <div className="uppercase text-sm mx-2 my-5">call centers</div>
        {linksList2.map((link) => (
          <li key={link}>
            <a href="/" className="menu-link">
              <TbPhoneCalling className="h-5 w-5" />
              {link}
            </a>
          </li>
        ))}
        <div className="uppercase text-sm mx-2 my-5">distribution channels</div>
        {linksList3.map((link) => (
          <li key={link}>
            <a href="/" className="menu-link">
              <VscSymbolClass className="h-5 w-5" />
              {link}
            </a>
          </li>
        ))}
        <div className="h-12"></div>
        <div class="indicator">
          <span class="indicator-item badge badge-accent">99+</span>
          <button class="btn">daily report updates</button>
        </div>
      </ul>
    </div>
  )
}

export default Menu
