import React from "react";
import bikeDeliveryImg from "../../../assets/Hero/delivery.png";
import heroImg from "../../../assets/Hero/hero.png";
import abstractImg from "../../../assets/Hero/Abstract.png";
import { IoMdPlay } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <>
      <div className="pt-14 pb-16">
        <div className="container">
          <div className="flex items-center justify-between bg-additionalColor w-[190px] md:w-[270px] rounded-[30px] py-1 pl-5">
            <div>
              <h3 className="text-sm md:text-base font-Montserrat font-semibold text-secondaryFontColor">
                Bike Delivery
              </h3>
            </div>
            <div className="h-[40px] md:h-[50px] md:w-[50px] w-[40px] rounded-full overflow-hidden mr-[6px]">
              <img
                src={bikeDeliveryImg}
                alt={bikeDeliveryImg}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="flex items-star sm:items-center sm:justify-between justify-start flex-col-reverse sm:flex-row relative">
            <div className="sm:w-[600px]">
              <h1 className="w-[300px] md:w-full md:text-5xl font-Montserrat font-bold text-4xl lg:text-7xl text-primaryFontColor uppercase pt-8 lg:pt-16 pb-5 lg:pb-12">
                The Fastest{" "}
                <span className="text-secondaryFontColor">Delivery</span> In
                <span className="text-secondaryFontColor">Your City</span>
              </h1>
              <p className="text-xs lg:text-base font-Montserrat font-medium text-primaryFontColor">
                Indulge Your Senses: Discover Culinary Delights at Food! Explore
                a Gastronomic Wonderland of Exquisite Flavors, Fresh
                Ingredients, and Irresistible Recipes. Savor Every Bite, From
                Farm to Fork, in Every Click.
              </p>
              <div className="flex items-center pt-8 md:pt-14 gap-x-4 md:gap-x-10">
                <div className="cursor-pointer text-sm md:text-lg font-Montserrat font-bold text-white py-3 px-3 md:px-6 rounded-[12px] bg-gradient-to-tr from-secondaryFontColor to-[#EFAB68] hover:from-[#EFAB68] hover:to-secondaryFontColor transition-all whitespace-nowrap">
                  Order Now
                </div>
                <div>
                  <div className="flex items-center gap-x-2 md:gap-x-4">
                    <div className="cursor-pointer bg-white w-[40px] md:w-[50px] md:h-[50px] h-[40px] rounded-full shadow-xl flex items-center justify-center">
                      <IoMdPlay className="text-secondaryFontColor text-xl md:text-2xl" />
                    </div>
                    <div className="text-sm md:text-lg font-bold text-primaryFontColor font-Montserrat">
                      Order Process
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[280px] sm:w-[450px] mt-4 md:mt-0">
              <img src={heroImg} alt={heroImg} />
            </div>
            <div className="absolute top-[42%] md:top-[62%] lg:top-[45%] xl:top-[38%] left-[50%] hidden md:block -translate-x-[35%] translate-y-[0%] z-20 w-[220px] md:w-[148px] lg:w-[160px] xl:w-[220px]">
              <img src={abstractImg} alt={abstractImg} />
            </div>
          </div>

          {/* Address */}
          <div className="w-full mt-14 md:mt-24 rounded-[50px] flex items-center text-center flex-col sm:flex-row gap-y-10 justify-between bg-white shadow-lg py-7">
            <div className="w-full sm:w-[387px] flex items-center justify-center flex-col sm:border-r-2  border-r-[#B6B6B6]">
              <div className="text-2xl w-[40px] h-[40px] bg-secondaryFontColor rounded-full text-white items-center flex justify-center">
                <IoMdTime />
              </div>
              <h2 className="text-base font-Montserrat font-semibold text-primaryFontColor pt-3">
                Today 10:00am - 10:00pm
              </h2>
              <p className="text-xs font-Montserrat font-normal text-primaryFontColor pt-[5px]">
                Working time
              </p>
            </div>
            <div className="w-full sm:w-[387px] flex items-center justify-center flex-col sm:border-r-2 border-r-[#B6B6B6]">
              <div className="text-2xl w-[40px] h-[40px] bg-secondaryFontColor rounded-full text-white items-center flex justify-center">
                <IoLocationOutline />
              </div>
              <h2 className="text-base font-Montserrat font-semibold text-primaryFontColor pt-3">
                Mohammadpur, Dhaka
              </h2>
              <p className="text-xs font-Montserrat font-normal text-primaryFontColor pt-[5px]">
                Our Location
              </p>
            </div>
            <div className="w-full sm:w-[387px] flex items-center justify-center flex-col ">
              <div className="text-2xl w-[40px] h-[40px] bg-secondaryFontColor rounded-full text-white items-center flex justify-center">
                <TbPhoneCall />
              </div>
              <h2 className="text-base font-Montserrat font-semibold text-primaryFontColor pt-3">
                +88 017 0000 0000
              </h2>
              <p className="text-xs font-Montserrat font-normal text-primaryFontColor pt-[5px]">
                Phone Number
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
