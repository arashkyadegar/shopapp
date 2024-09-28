import React from "react";
import Link from "next/link";
import { turnToFa } from "@/utility/regex";
import ProductCardTagComponent from "./product-card-tag";
import ProductCardStarComponent from "./product-card-star";

export default function ProductCardCenteredComponent({ color, title }: any) {

  const discount: number = 1500;

  return (
    <>
      {/* single product card min-h-62 min-w-62 max-h-62 max-w-62 */}
      <div className=" w-full text-right px-3 pt-3 relative 
                  overflow-hidden text-sm  bg-white shadow-gray-600  
                   transition-all duration-200  mt-6 hover:mt-4 ">
        <div className="overflow-hidden justify-center">
          <div className=" w-full justify-center relative">
            {discount > 0 && (
              <ProductCardTagComponent color={color} title={title} />
            )}
            <div className="flex justify-center">
              <Link
                href={{
                  pathname: `/product`,
                  query: { id: '1' },
                }}
              >
                <img
                  src='/imgs/category-thumb-1.jpg'
                  className="z-0  min-h-40  min-w-40 max-h-40 max-w-40 
                   rounded-xl w-fit aspect-square cursor-pointer"
                  alt='category-thumb-1'
                  title='category-thumb-1'
                  // crossOrigin="anonymous"
                />
              </Link>
            </div>
          </div>
        </div>
        <h5 className="text-lg mt-2 px-4 text-black text-center font-semibold tracking-tight dark:text-white">
          پیراهن تابستانه خنک ترکیه
        </h5>
        <div className="flex flex-row px-4 mt-2  justify-center">
          <div className="flex flex-row">
            <ProductCardStarComponent />
            <ProductCardStarComponent />
            <ProductCardStarComponent />
            <ProductCardStarComponent />
          </div>
          <h1 className="text-xs">{turnToFa('95')}%</h1>
        </div>
        <h5 className="text-xl mt-2 px-4 text-green-600 text-center font-semibold tracking-tight dark:text-white">
          تومان ۱۳۴.۵۸
        </h5>

        <div className="h-10 ">
          <div className="flex flex-row gap-1  justify-center items-center">
            {discount === 0 && (
              <div className="flex flex-row mt-2 justify-center items-center">
                <h1 className="text-center text-xs text-[#80BB01]  line-clamp-1  font-semibold tracking-tight dark:text-white">
                  {turnToFa('1000')} ت
                </h1>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}
