import { useState } from "react";
import DropdownCategory from "./DropdownCategory";
import profile from "../../assets/img/Photo/23.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <>
        <nav className="flex items-center justify-between gap-9 px-[90px] py-6 ">
          <a
            class="logo"
            href="/"
            className="text-xl transition-all semibold text- text-font"
          >
            SNAPSIERRA.
          </a>

          <div
            id="search"
            className="relative items-center justify-center hidden w-full gap-2 px-3 py-2 rounded-xl md:flex bg-bg-input"
          >
            <i className="text-lg bx bx-search text-ph-input"></i>
            <input
              type="text"
              placeholder="Search what you want"
              className="w-full bg-transparent border-none caret-gray-600 text-font focus:outline-none placeholder-ph-input"
            />
          </div>

          <ul className="items-center hidden gap-8 font-medium cursor-pointer xl:flex">
            <li className="text-nav-menu hover:text-font text-nowrap">
              <a href="/Explore">Explore</a>
            </li>

            <li
              className="flex items-center justify-center text-nav-menu hover:text-font text-nowrap"
              onClick={() => setOpenDropdown((prev) => !prev)}
            >
              Category
              <i class="bx bx-chevron-down text-2xl "></i>
            </li>

            <li className="text-nav-menu hover:text-font text-nowrap">
              <a href="/BuyPhoto">Buy Photo</a>
            </li>
          </ul>

          <Link to='/Profile/#saveimage'>
          <i className="text-2xl cursor-pointer bx bxs-bookmark text-font"></i>
          </Link>

          <button className="items-center justify-center overflow-hidden bg-white rounded-full max-w-11">
            <Link to='/Profile'>
            <img src={profile} alt="Logo" className="object-cover " />
            </Link>
          </button>
        </nav>

      {openDropdown && <DropdownCategory />}
    </>
  );
}
