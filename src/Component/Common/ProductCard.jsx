import React from "react";
import productImg from "../../assets/Product/1.png";
import { IoIosStar } from "react-icons/io";

const ProductCard = ({ img, title, rating, price }) => {
  return (
    <>
      <div className="w-[340px] overflow-hidden rounded-[30px] bg-white shadow-xl sm:w-[272px] md:w-[330px] lg:w-[274px] xl:w-[340px]">
        <div className="h-[220px] w-full">
          <img
            src={img ? img : productImg}
            alt={img}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="px-8 pb-9">
          <div className="flex items-center justify-between pt-3">
            <h4 className="w-[203px] overflow-hidden text-ellipsis whitespace-nowrap font-Montserrat text-xl font-bold text-primaryFontColor">
              {title ? title : " Gyro Sandwhic"}
            </h4>
            <div className="flex items-center gap-x-2">
              <IoIosStar className="text-secondaryFontColor" />
              <span className="font-Montserrat text-sm font-normal text-primaryFontColor">
                {rating ? rating : "5.00"}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div className="cursor-pointer rounded-[32px] bg-secondaryFontColor px-6 py-3 font-Montserrat text-sm font-normal text-white transition-all hover:bg-[#ff8000] active:scale-95">
              Add To Cart
            </div>
            <div>
              <p className="font-Montserrat text-base font-bold text-primaryFontColor">
                {price ? price : "$15.00"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
