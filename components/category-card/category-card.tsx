import React from "react";
import Link from "next/link";
import getDefaultImageAvator from "@/utility/imageUtility";
import Image from 'next/image'
export default function CategoryCardComponent(props: any) {
  console.log(props)
  return (
    <>
      {/* single product card min-h-62 min-w-62 max-h-62 max-w-62 */}
      <div className=" w-full text-right border px-3 pt-3 relative rounded-xl 
                  overflow-hidden text-sm  bg-white shadow-gray-600  
                  border-green-200 transition duration-200 hover:shadow-lg ">
        <div className="overflow-hidden justify-center">
          <div className=" w-full justify-center relative">

            <div className="flex justify-center">
              <Link
                href={{
                  pathname: `/product-category/${props.name}`,
                  query: { page: 1 }
                }} 
              >
                <Image
                  src={getDefaultImageAvator(props.image)}
                  className="z-0   w-full aspect-square cursor-pointer  rounded-xl"
                  alt={props.menuTitle}
                  title={props.menuTitle}
                  width={500}
                  height={500}
                />
                {/* <img
                  src={getDefaultImageAvator(props.image)}
                  className="z-0  min-h-48  min-w-48 max-h-48 max-w-48 
                   rounded-xl w-fit aspect-square cursor-pointer hover:scale-110 duration-150"
                  alt='category-thumb-1'
                  title='category-thumb-1'
                // crossOrigin="anonymous"
                /> */}
              </Link>
            </div>
          </div>
        </div>
        <h5 className="text-lg mt-2 px-4 text-black text-center font-semibold tracking-tight dark:text-white">
          {props.menuTitle}
        </h5>

      </div>
    </>
  );
}
