import React from "react";
import service1Img from "../../../assets/Service/service1.png";
import service2Img from "../../../assets/Service/service2.png";
import service3Img from "../../../assets/Service/service3.png";

const Service = () => {
  return (
    <>
      <div className="pb-20 pt-5 md:pt-10">
        <div className="container">
          <div className="text-center">
            <h4 className="font-Montserrat text-sm font-medium text-secondaryFontColor md:text-base">
              Services
            </h4>
            <h2 className="pb-6 font-Montserrat text-2xl font-bold text-primaryFontColor md:pb-14 md:text-4xl">
              Why Choose Our Favorite Food
            </h2>
          </div>
          <div className="flex flex-col items-center justify-between gap-y-8 text-center sm:flex-row">
            <div className="flex h-[400px] w-[340px] cursor-pointer flex-col items-center justify-center rounded-[30px] border-2 border-[#b6b6b654] bg-white px-2 py-16 transition-transform hover:translate-y-[-3%] hover:shadow-xl sm:h-[340px] sm:w-[178px] sm:py-8 md:h-[332px] md:w-[215px] md:px-4 lg:h-[400px] lg:w-[280px] lg:py-16 xl:w-[340px]">
              <div className="flex h-[65px] w-[65px] items-center justify-center rounded-full bg-additionalColor lg:h-[85px] lg:w-[85px]">
                <img
                  src={service1Img}
                  alt={service1Img}
                  className="w-[30px] lg:w-[40px]"
                />
              </div>
              <h4 className="py-4 font-Montserrat text-xl font-bold text-primaryFontColor md:py-8 lg:text-2xl">
                Qualityfull Food
              </h4>
              <p className="text-center font-Montserrat text-sm font-medium text-primaryFontColor lg:text-base">
                But I must explain to you how all this mistaken idea of
                denouncing pleasur and prasising pain was bron.
              </p>
            </div>
            <div className="flex h-[400px] w-[340px] cursor-pointer flex-col items-center justify-center rounded-[30px] border-2 border-[#b6b6b654] bg-white px-2 py-16 transition-transform hover:translate-y-[-3%] hover:shadow-xl sm:h-[340px] sm:w-[178px] sm:py-8 md:h-[332px] md:w-[215px] md:px-4 lg:h-[400px] lg:w-[280px] lg:py-16 xl:w-[340px]">
              <div className="flex h-[65px] w-[65px] items-center justify-center overflow-hidden rounded-full bg-additionalColor lg:h-[85px] lg:w-[85px]">
                <img
                  src={service2Img}
                  alt={service2Img}
                  className="w-[30px] lg:w-[40px]"
                />
              </div>
              <h4 className="py-4 font-Montserrat text-xl font-bold text-primaryFontColor md:py-8 lg:text-2xl">
                Healthy Food
              </h4>
              <p className="text-center font-Montserrat text-sm font-medium text-primaryFontColor lg:text-base">
                But I must explain to you how all this mistaken idea of
                denouncing pleasur and prasising pain was bron.
              </p>
            </div>
            <div className="flex h-[400px] w-full cursor-pointer flex-col items-center justify-center rounded-[30px] border-2 border-[#b6b6b654] bg-white px-2 py-16 transition-transform hover:translate-y-[-3%] hover:shadow-xl sm:h-[340px] sm:w-[178px] sm:py-8 md:h-[332px] md:w-[215px] md:px-4 lg:h-[400px] lg:w-[280px] lg:py-16 xl:w-[340px]">
              <div className="flex h-[65px] w-[65px] items-center justify-center overflow-hidden rounded-full bg-additionalColor lg:h-[85px] lg:w-[85px]">
                <img
                  src={service3Img}
                  alt={service3Img}
                  className="w-[30px] lg:w-[40px]"
                />
              </div>
              <h4 className="py-4 font-Montserrat text-xl font-bold text-primaryFontColor md:py-8 lg:text-2xl">
                Fast Delivery
              </h4>
              <p className="text-center font-Montserrat text-sm font-medium text-primaryFontColor lg:text-base">
                But I must explain to you how all this mistaken idea of
                denouncing pleasur and prasising pain was bron.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
