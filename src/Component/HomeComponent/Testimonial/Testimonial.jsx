import React from "react";
import img from "../../../assets/Testimonial/testimonial.png";
import men from "../../../assets/Testimonial/men.png";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Testimonial = () => {
  return (
    <>
      <div className="pb-20 lg:pb-44">
        <div className="container">
          <div className="text-center">
            <h4 className="tex-sm md:text-base font-Montserrat font-medium text-secondaryFontColor">
              Testimonials
            </h4>
            <h2 className="text-2xl md:text-4xl font-Montserrat font-bold text-primaryFontColor">
              Our Happy Client Says
            </h2>
          </div>
          <div className="h-full lg:h-[420px] pt-4 md:pt-14 flex flex-col gap-y-16 sm:flex-row items-center justify-between gap-x-6">
            <div className="relative bg-white shadow-xl rounded-[30px] w-full sm:w-[244px] md:w-[300px] lg:w-[400px] xl:w-[500px] h-full">
              <div className="prev-arrow w-10 h-10 bg-secondaryFontColor text-white rounded-full flex items-center justify-center text-3xl cursor-pointer absolute -left-3 sm:-left-4 top-[50%] -translate-y-[50%] z-50 hover:bg-[#ff8b16] active:scale-105">
                <BsArrowLeftShort />
              </div>
              <div className="next-arrow w-10 h-10 bg-secondaryFontColor text-white rounded-full flex items-center justify-center text-3xl cursor-pointer absolute -right-3 sm:-right-4 top-[50%] -translate-y-[50%] z-50 hover:bg-[#ff8b16] active:scale-105">
                <BsArrowRightShort />
              </div>
              <Swiper
                navigation={{
                  prevEl: ".prev-arrow",
                  nextEl: ".next-arrow",
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                {Array.from({ length: 10 }, (x, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="flex flex-col items-center justify-center py-10 lg:py-20 px-2 lg:px-14">
                        <div className="flex items-center gap-x-4">
                          <div>
                            <img src={men} alt={men} className="w-[50px]" />
                          </div>
                          <div>
                            <h5 className="text-sm md:text-base font-Montserrat font-semibold text-primaryFontColor">
                              Willians Jhone
                            </h5>
                            <p className="text-xs font-Montserrat font-normal text-primaryFontColor">
                              CEO & Co-Founder
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-center text-xs md:text-sm font-Montserrat font-medium text-primaryFontColor pt-5 md:pt-10 max-w-[450px]">
                            As the CEO of Food, my role is to lead our
                            passionate team in curating an online culinary
                            destination where food enthusiasts can discover,
                            explore, and celebrate the world of gastronomy.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div>
              <img src={img} alt={img} className="w-[700px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
