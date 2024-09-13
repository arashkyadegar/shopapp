import React from "react";
import Link from "next/link";

export default function CategoryCardComponent({ color, title }: any) {
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
                  pathname: `/product`,
                  query: { id: '1' },
                }}
              >
                <img
                  src='/imgs/category-thumb-1.jpg'
                  className="z-0  min-h-48  min-w-48 max-h-48 max-w-48 
                   rounded-xl w-fit aspect-square cursor-pointer hover:scale-110 duration-150"
                  alt='category-thumb-1'
                  title='category-thumb-1'
                  crossOrigin="anonymous"
                />
              </Link>
            </div>
          </div>
        </div>
        <h5 className="text-lg mt-2 px-4 text-black text-center font-semibold tracking-tight dark:text-white">
        لباس
        </h5>

      </div>
    </>
  );
}
