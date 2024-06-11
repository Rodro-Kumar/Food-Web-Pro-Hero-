import React, { useState } from "react";
import logo from "../../../assets/Logo/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { MdContactPage } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {
  const [open, setopen] = useState(false);

  const HandleNav = () => {
    setopen(true);
  };

  const HandleClose = () => {
    setopen(false);
  };
  return (
    <>
      <div className="relative py-6">
        {open && (
          <div className="fixed left-0 top-0 z-50 h-screen w-full bg-[#ffffff31] backdrop-blur-sm"></div>
        )}

        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <img src={logo} alt={logo} className="w-[70px]" />
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-x-9 md:gap-x-4 lg:gap-x-9">
                <li>
                  <a
                    href="#"
                    className="relative font-Montserrat text-sm font-semibold text-primaryFontColor after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-secondaryFontColor after:transition-transform hover:after:origin-left hover:after:scale-x-100 lg:text-base"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#shop"
                    className="relative font-Montserrat text-sm font-semibold text-primaryFontColor after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-secondaryFontColor after:transition-transform hover:after:origin-left hover:after:scale-x-100 lg:text-base"
                  >
                    Cart
                  </a>
                </li>
                <li>
                  <a
                    href="#shop"
                    className="relative font-Montserrat text-sm font-semibold text-primaryFontColor after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-secondaryFontColor after:transition-transform hover:after:origin-left hover:after:scale-x-100 lg:text-base"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="#footer"
                    className="relative font-Montserrat text-sm font-semibold text-primaryFontColor after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-secondaryFontColor after:transition-transform hover:after:origin-left hover:after:scale-x-100 lg:text-base"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="max-w-[390px] rounded-[10px] bg-white px-4 py-2 shadow-lg md:px-6">
                <div className="flex items-center">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-[138px] pl-6 placeholder:font-Montserrat placeholder:text-xs placeholder:font-semibold placeholder:text-primaryFontColor sm:w-[200px] md:pl-8 placeholder:md:text-base"
                    />
                    <div className="absolute top-[50%] -translate-y-[50%]">
                      <IoSearchOutline className="text-lg md:text-2xl" />
                    </div>
                  </div>
                  <div>
                    <div className="border-l-2 pl-3 md:pl-7">
                      <div className="relative">
                        <FiShoppingBag className="cursor-pointer text-xl" />
                        <div className="absolute right-[-5px] top-[-5px] flex h-[15px] w-[15px] items-center justify-center rounded-full bg-secondaryFontColor font-Montserrat text-[7px] font-normal text-white shadow-lg shadow-secondaryFontColor">
                          2
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="cursor-pointer text-secondaryFontColor md:hidden"
              onClick={HandleNav}
            >
              <FaBars className="text-xl" />
            </div>
          </div>

          {/* Mobile view menu */}

          <div
            className={`fixed right-0 top-0 z-50 h-screen w-[50%] ${
              open
                ? "right-0 transition-all duration-500"
                : "right-[-100%] transition-all duration-200"
            }`}
          >
            <div
              className="absolute right-[15px] top-[12px] cursor-pointer text-2xl active:scale-95"
              onClick={HandleClose}
            >
              <RxCross2 className="text-white hover:text-secondaryFontColor" />
            </div>
            <ul className="flex h-full w-full flex-col items-start gap-y-6 bg-primaryFontColor pl-5 pt-8">
              <li>
                <a
                  href="#"
                  className="relative flex items-center gap-x-1 font-Montserrat text-base font-semibold text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-secondaryFontColor after:transition-transform hover:after:origin-left hover:after:scale-x-100"
                >
                  <IoMdHome className="text-lg" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex items-center gap-x-1 font-Montserrat text-base font-semibold text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-secondaryFontColor after:transition-transform hover:after:origin-left hover:after:scale-x-100"
                >
                  <FaCartShopping />
                  Cart
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex items-center gap-x-1 font-Montserrat text-base font-semibold text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-secondaryFontColor after:transition-transform hover:after:origin-left hover:after:scale-x-100"
                >
                  <FaBagShopping />
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex items-center gap-x-1 font-Montserrat text-base font-semibold text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-secondaryFontColor after:transition-transform hover:after:origin-left hover:after:scale-x-100"
                >
                  <MdContactPage />
                  Contact
                </a>
              </li>
              <img src={logo} alt="" className="mt-4 w-[70px]" />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
