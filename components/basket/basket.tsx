import React from "react";
import myAppContext from "../context/context";
import BasketDropDownComponent from "./basket-drpdwn";
import { usePathname } from "next/navigation";


export default function BasketComponent() {
  const { basketDrpDwnIsOpen, setBasketdrpDwnIsOpen } = React.useContext(myAppContext);



  return (
    <>
      {/* extera border for mobile-navbar */}
      <div className="border-t border-black md:hidden"></div>
      <div className="flex flex-col sm:flex-row justify-between container  p-4 gap-2">
        <div className="w-full flex flex-col border rounded-lg p-4  text-sm">
          <div className="flex flex-row justify-between">
            <div >
              <h1 className="mb-2 text-lg">
                سبد خرید شما
              </h1>
              <h1>۲ کالا</h1>
            </div>
         
              <button className="relative" onClick={() => setBasketdrpDwnIsOpen(!basketDrpDwnIsOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>

                {basketDrpDwnIsOpen && (
                  <div className="absolute top-6 left-full">
                    <BasketDropDownComponent />
                  </div>
                )}

              </button>
          
          </div>
          <div className="w-full border-b">
            <div className="flex flex-row ">
              <div className="flex flex-col w-2/5 ">
                <div className="w-full flex flex-col">
                  <img src="/imgs/orginal_17273352073777_0U4A9287.jpg" className="w-20 my-4 rounded-md" />
                </div>
                <div className="w-full p-1">

                  <div className=" bottom-1 flex flex-row  w-full  text-red-600 py-1 rounded-lg">

                    <input type="number" className="w-10 bg-transparent outline-none text-black border mx-2">

                    </input>
                    <button className="   rounded-l-lg bg-transparent transition-all duration-200 delay-75 ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full ">
                <div className="w-full mb-5  p-2">
                  <h1 className="text-lg font-bold">گوشی موبایل هانر دو سیم کارت ظرفیت ۲۵۶</h1>
                </div>
                <div className="w-1/4  px-2">
                  <div className="flex flex-row  gap-1 text-sm items-center">
                    <h1 className="text-xl">۵۶,۵۹۸,۰۰۰</h1>
                    <a className="p-1 text-xs text-gray-500">تومان</a>
                  </div>
                  <div className="flex flex-row  gap-1 mb-4 text-red-500 text-sm items-center">
                    <h1 className="text-xl">۱۰۰۰</h1>
                    <a className="p-1 text-xs">تومان</a>
                    <div className="w-full">تخفیف</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-b">
            <div className="flex flex-row ">
              <div className="flex flex-col w-2/5 ">
                <div className="w-full flex flex-col">
                  <img src="/imgs/orginal_17273352073777_0U4A9287.jpg" className="w-20 my-4 rounded-md" />
                </div>
                <div className="w-full p-1">

                  <div className=" bottom-1 flex flex-row  w-full  text-red-600 py-1 rounded-lg">

                    <input type="number" className="w-10 bg-transparent outline-none text-black border mx-2">

                    </input>
                    <button className="   rounded-l-lg bg-transparent transition-all duration-200 delay-75 ">
                      {/* delete-icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full ">
                <div className="w-full mb-5  p-2">
                  <h1 className="text-lg font-bold">گوشی موبایل هانر دو سیم کارت ظرفیت ۲۵۶</h1>
                </div>
                <div className="w-1/4  px-2">
                  <div className="flex flex-row  gap-1 text-sm items-center">
                    <h1 className="text-xl">۵۶,۵۹۸,۰۰۰</h1>
                    <a className="p-1 text-xs text-gray-500">تومان</a>
                  </div>
                  <div className="flex flex-row  gap-1 mb-4 text-red-500 text-sm items-center">
                    <h1 className="text-xl">۱۰۰۰</h1>
                    <a className="p-1 text-xs">تومان</a>
                    <div className="w-full">تخفیف</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full sm:w-2/4 border rounded-lg flex flex-col p-4 ">
          <div className="flex flex-row  text-sm items-center">
            <div className="w-full ">قیمت کالاها </div>
            <h1 className="text-xl">۵۶,۵۹۸,۰۰۰</h1>
            <a className=" p-1 text-xs text-gray-500">تومان</a>
          </div>
          <div className="flex flex-row  gap-1 text-sm items-center">
            <div className="w-full">جمع سبد خرید</div>
            <h1 className="text-xl">۵۶,۵۹۸,۰۰۰</h1>
            <a className="p-1 text-xs text-gray-500">تومان</a>
          </div>
          <div className="flex flex-row  gap-1 mb-4 text-red-500 text-sm items-center">
            <div className="w-full">تخفیف</div>
            <h1 className="text-xl">۱۰۰۰</h1>
            <a className="p-1 text-xs">تومان</a>
          </div>
          <div className="flex border-t justify-center items-center pt-4">
            <button className=" bg-red-500 text-sm text-gray-100 p-2 rounded-lg">تایید و تکمیل سفارش</button>
          </div>

        </div>

      </div>
    </>
  );
}
