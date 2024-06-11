import { React, useState } from "react";
import logo from "../../../assets/Logo/logo.png";
import { AiOutlineRight } from "react-icons/ai";
import { PiWarningOctagonBold } from "react-icons/pi";
import { toast, Bounce } from "react-toastify";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  // Email rezex
  function emailCheck(email) {
    const emailRezex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let emailValid = emailRezex.test(email.toLocaleLowerCase());
    return emailValid;
  }

  // stored input value
  const [userEmail, setuserEmail] = useState({
    Email: "",
  });

  // stored error  input value
  const [userEmailError, setuserEmailError] = useState({
    EmailError: "",
    EmailValidate: "",
  });

  // HandleInput
  const HandleInput = (event) => {
    setuserEmail({
      ...userEmail,
      [event.target.id]: event.target.value,
    });
  };

  // HandleSubscribe
  const HandleSubscribe = () => {
    const { Email } = userEmail;
    if (!Email) {
      setuserEmailError({
        ...userEmailError,
        EmailError: "Please enter your email address",
      });
    } else if (!emailCheck(Email)) {
      setuserEmailError({
        ...userEmailError,
        EmailError: "",
        EmailValidate: "Please enter your valid email",
      });
    } else {
      setuserEmailError({
        ...userEmailError,
        EmailError: "",
        EmailValidate: "",
      });

      toast.success(
        <p className="font-Montserrat text-sm font-medium">Thank you</p>,
        {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        },
      );
      setuserEmail({
        ...userEmail,
        Email: "",
      });
    }
  };
  return (
    <>
      <div id="footer" className="mt-8 bg-[#FAFAFF] py-14 xl:mt-16">
        <div className="container">
          <div className="flex flex-col justify-between lg:flex-row lg:gap-x-3 xl:gap-x-0">
            <div className="w-full lg:w-[288px] xl:w-[370px]">
              <img src={logo} alt={logo} />
              <p className="pt-7 font-Montserrat text-sm font-medium text-[#B6B6B6] xl:text-base">
                Savor the flavors of exceptional cuisine at Food, where every
                bite tells a story. Explore our diverse menu crafted with
                passion and expertise. Experience culinary excellence with every
                visit. Bon appétit!
              </p>
              <div className="flex items-center gap-x-4 pt-6">
                <a
                  href="#"
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-additionalColor text-xl text-secondaryFontColor transition-all hover:-translate-y-[8%] hover:bg-[#0862f6] hover:text-white hover:shadow-xl"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-additionalColor text-xl text-secondaryFontColor transition-all hover:-translate-y-[8%] hover:bg-white hover:text-[#1c9cea] hover:shadow-xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-additionalColor text-xl text-secondaryFontColor transition-all hover:-translate-y-[8%] hover:bg-[#0470ae] hover:text-white hover:shadow-xl"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-additionalColor text-xl text-secondaryFontColor transition-all hover:-translate-y-[8%] hover:bg-[#7356c2] hover:text-[#f39a54] hover:shadow-xl"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-x-6 gap-y-5 pt-8 sm:flex-nowrap lg:pt-0 xl:gap-x-14">
              <div>
                <p className="pb-5 font-Montserrat text-sm font-bold text-primaryFontColor md:text-xl">
                  Opening Restaurant
                </p>
                <ul className="gap-y-8 font-Montserrat text-sm font-normal text-[#B6B6B6] md:gap-3 md:text-sm lg:text-base">
                  <li>
                    <a href="#">Sat-Wet: 09:00am-10:00PM</a>
                  </li>
                  <li>
                    <a href="#">Sat-Wet: 09:00am-10:00PM</a>
                  </li>
                  <li>
                    <a href="#">Sat-Wet: 09:00am-10:00PM</a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="pb-5 font-Montserrat text-sm font-bold text-primaryFontColor md:text-xl">
                  User Link
                </p>
                <ul className="gap-y-8 font-Montserrat text-sm font-normal text-[#B6B6B6] md:gap-3 md:text-sm lg:text-base">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Order Delivery</a>
                  </li>
                  <li>
                    <a href="#">Payment & Tex</a>
                  </li>

                  <li>
                    <a href="#">Terms of Services</a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-[252px]">
                <p className="pb-5 font-Montserrat text-sm font-bold text-primaryFontColor md:text-xl">
                  Contact Us
                </p>
                <ul className="gap-y-8 font-Montserrat text-sm font-normal text-[#B6B6B6] md:gap-3 md:text-sm lg:text-base">
                  <li>
                    <a href="#">Mohammadpur, Dhaka</a>
                  </li>
                  <li>
                    <a href="#">+88 017 0000 0000</a>
                  </li>
                  <li>
                    <a href="#">+88 018 0000 0000</a>
                  </li>
                </ul>
                <div className="relative mt-8">
                  <input
                    type="text"
                    placeholder="Type your email....."
                    className={`placeholder:md:ext-sm w-full rounded-[30px] bg-white py-2 pl-2 shadow-xl placeholder:font-Montserrat placeholder:font-normal placeholder:text-[#B6B6B6] focus:outline-[1px] focus:outline-secondaryFontColor md:py-3 md:pl-4 placeholder:text-xs${
                      userEmailError.EmailError
                        ? "outline-1 outline-[#f70000] focus:outline-[#f70000]"
                        : userEmailError.EmailValidate &&
                          "outline-1 outline-[#f70000] focus:outline-[#f70000]"
                    }`}
                    id="Email"
                    name="Email"
                    onChange={HandleInput}
                  />
                  <div
                    className="absolute right-2 top-[50%] flex h-[30px] w-[30px] -translate-y-[50%] cursor-pointer items-center justify-center rounded-full bg-secondaryFontColor font-Montserrat text-lg font-semibold text-white hover:bg-[#ff8001] md:h-[40px] md:w-[40px] md:text-2xl"
                    onClick={HandleSubscribe}
                  >
                    <AiOutlineRight />
                  </div>
                </div>
                {userEmailError.EmailError ? (
                  <p className="flex items-center gap-x-1 pt-1 font-Montserrat text-xs font-medium text-[#f70000]">
                    <PiWarningOctagonBold /> {userEmailError.EmailError}
                  </p>
                ) : (
                  userEmailError.EmailValidate && (
                    <p className="flex items-center gap-x-1 pt-1 font-Montserrat text-xs font-medium text-[#f70000]">
                      <PiWarningOctagonBold /> {userEmailError.EmailValidate}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
