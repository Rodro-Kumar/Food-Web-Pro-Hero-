import React, { useEffect, useState } from "react";
import ProductCard from "../../Common/ProductCard";
import { IoIosArrowDropright, IoIosArrowDropup } from "react-icons/io";

const Product = () => {
  const [product, setproduct] = useState([]);
  const [seeMore, setseeMore] = useState(false);

  // Data fetch from api
  useEffect(() => {
    const getdata = async () => {
      await fetch("https://dummyjson.com/recipes")
        .then((res) => {
          return res.json();
        })
        .then((allData) => {
          setproduct(allData.recipes);
        });
    };
    getdata();
  }, []);

  // HandleSeeMore
  const HandleSeeMore = () => {
    setseeMore(!seeMore);
  };
  return (
    <>
      <div id="shop" className="pb-20 pt-10 md:pb-24">
        <div className="container">
          <div>
            <div className="pb-7 text-center md:pb-14">
              <p className="font-Montserrat text-sm font-medium text-secondaryFontColor md:text-base">
                Product
              </p>
              <h2 className="font-Montserrat text-2xl font-bold text-primaryFontColor md:text-4xl">
                Most Popular Items
              </h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-y-10 sm:justify-between">
              {product?.slice(0, 6).map((item) => (
                <ProductCard
                  key={item.id}
                  img={item.image}
                  title={item.name}
                  rating={item.rating}
                  price={item.price}
                />
              ))}
              {seeMore &&
                product
                  ?.slice(7, 13)
                  .map((item) => (
                    <ProductCard
                      key={item.id}
                      img={item.image}
                      title={item.name}
                      rating={item.rating}
                      price={item.price}
                    />
                  ))}
            </div>
            <div className="mt-14 flex items-center justify-center">
              <div
                className="flex cursor-pointer items-center gap-x-2 rounded-[40px] bg-secondaryFontColor px-4 py-3 font-Montserrat text-sm font-medium text-white md:px-6 md:py-4 md:text-base"
                onClick={HandleSeeMore}
              >
                {seeMore ? "See less" : "See More Products "}
                {seeMore ? (
                  <IoIosArrowDropup className="text-xl" />
                ) : (
                  <IoIosArrowDropright className="text-xl" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
