import React from "react";
import Link from "next/link";
import { getNewPrice } from "@/utility/discount";
import { turnToFa } from "@/utility/regex";
import ProductCardTagComponent from "./product-card-tag";
import ProductCardStarComponent from "./product-card-star";

export default function ProductCardComponent({ color, title }: any) {

  const discount: number = 1500;

  return (
    <>
      {/* single product card min-h-62 min-w-62 max-h-62 max-w-62 */}
      <div className=" w-full text-right border px-3 pt-3 relative rounded-xl 
                  overflow-hidden text-sm  bg-white shadow-gray-600  
                  border-green-200 transition duration-200 hover:shadow-lg">
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
                  className="z-0  min-h-48  min-w-48 max-h-48 max-w-48 
                   rounded-xl w-fit aspect-square cursor-pointer"
                  alt='category-thumb-1'
                  title='category-thumb-1'
                  crossOrigin="anonymous"
                />
              </Link>
            </div>
          </div>
        </div>
     
          <h5 className="text-sm mt-2 px-4 text-gray-400 text-right font-semibold tracking-tight dark:text-white">
            لباس
          </h5>
       


        <h5 className="text-lg mt-2 px-4 text-black text-right font-semibold tracking-tight dark:text-white">
          پیراهن تابستانه خنک ترکیه
        </h5>
        <div className="flex flex-row px-4 mt-2">
          <div className="flex flex-row">
            <ProductCardStarComponent />
            <ProductCardStarComponent />
            <ProductCardStarComponent />
            <ProductCardStarComponent />
          </div>
          <h1 className="text-xs">{turnToFa('95')}%</h1>
        </div>
        <h5 className="text-2xl mt-2 px-4 text-green-600 text-right font-semibold tracking-tight dark:text-white">
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

          <div className="  -mt-10 bg-transparent  bottom-1 flex flex-row justify-end gap-1  w-full">
            <div className="  cursor-pointer  bg-transparent">
              <Link
                href={{
                  pathname: `/product`,
                  query: { id: '1' },
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  data-slot="icon"
                  className="w-8 h-8 bg-green-100 text-green-700 m-2  p-1 border  rounded-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
