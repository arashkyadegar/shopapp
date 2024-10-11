import React from "react";
import Link from "next/link";
import { turnToFa } from "@/utility/regex";
import ProductCardTagComponent from "./product-card-tag";
import ProductCardStarComponent from "./product-card-star";
import getDefaultImageAvator from "@/utility/imageUtility";
import Image from 'next/image'
import { getNewPrice } from "@/utility/discount";
export default function ProductCardComponent(props: any) {
  const mainImage = props.images.find((x: any) => x.status);

  return (
    <>
      {/* single product card min-h-62 min-w-62 max-h-62 max-w-62 */}
      <div className=" w-full text-right border  pt-3 relative rounded-xl 
                  overflow-hidden text-sm  bg-white shadow-gray-600  
                  border-green-200 transition duration-200 hover:shadow-lg">
        <div className="overflow-hidden justify-center">
          <div className=" w-full justify-center relative">
            {props.discount > 0 && (
              <ProductCardTagComponent color={props.color} title={props.title} />
            )}
            <div className="flex justify-center w-full">
              <Link
                href={{
                  pathname: `/products/${props._id}`
                }}
              >
                <Image
                  src={mainImage ? getDefaultImageAvator(mainImage.name) : ""}
                  className="z-0   w-full aspect-square cursor-pointer  rounded-xl"
                  alt={mainImage ? mainImage.alt : ""}
                  title={mainImage ? mainImage.alt : ""}
                  width={500}
                  height={500}
                />
                {/* <img
                  src={mainImage ? getDefaultImageAvator(mainImage.name) : ""}
                  className="z-0   w-full aspect-square cursor-pointer  rounded-xl"
                  alt={mainImage ? mainImage.alt : ""}
                  title={mainImage ? mainImage.alt : ""}
                // crossOrigin="anonymous"
                /> */}
              </Link>
            </div>
          </div>
        </div>

        <h5 className="text-sm mt-2 px-4 text-gray-400 text-right font-semibold tracking-tight dark:text-white">
          {props.category ? props.category.pageTitle : "نامشخص"}
        </h5>

        <h5 className="text-lg mt-2 px-4 text-black text-right font-semibold tracking-tight dark:text-white">
          {props.name}
        </h5>
        <div className="flex flex-row px-4 mt-2 gap-2">
          <div className="flex flex-row items-center justify-center">
            <ProductCardStarComponent />
            <ProductCardStarComponent />
            <ProductCardStarComponent />
            <ProductCardStarComponent />
          </div>
          <h1 className="text-xs text-gray-400 ">{turnToFa(props.discount)}%</h1>
        </div>

        <div className="h-18">
          <h5 className="text-xl flex sm:flex-row p-2 text-green-600 text-right font-semibold  dark:text-white   border-gray-200">
            <a>{turnToFa(getNewPrice(props.price, props.discount).toString())}  تومان</a>
            <span className="text-gray-400 mr-1 text-sm line-through">
              {turnToFa(props.price)} تومان
            </span>
          </h5>

          <div className="  -mt-6 bg-transparent  bottom-1 flex flex-row justify-end gap-1  w-full">
            <div className="  cursor-pointer  bg-transparent">
              <Link
                href={{
                  pathname: `/product`,
                  query: { id: '1' },
                }}>
              </Link>
              <li className="addtobasket relative list-none mt-1 w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  data-slot="icon"
                  className=" w-8 h-8 bg-green-100 text-green-700 hover:bg-green-700 hover:text-white m-1  p-1  duration-200 transition-all   rounded-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <ul className=" absolute none flex items-center justify-center w-16 text-xs text-white h-6 -top-7 right-9 rounded-lg bg-green-700 transition-all duration-200" >
                  <li>سبد خرید</li>
                </ul>
              </li>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
