import Image from "next/image";
import localFont from "next/font/local";
import ProductCardComponent from "@/components/product-card.tsx/product-card";
import CategoryCardComponent from "@/components/category-card/category-card";
import SliderMainComponent from "@/components/slider/slider-main";
import ServiceCardComponent from "@/components/service-card/service-card";
import PcNavbarComponent from "@/components/shared/navbar/pc-navbar";

export default function Home() {
  return (
    <>
      <PcNavbarComponent />
      <div className="p-10 flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <SliderMainComponent images={["/imgs/product-14-2.jpg", "/imgs/product-16-1.jpg", "/imgs/product-16-5.jpg"]} />

        </div>
        <ServiceCardComponent />
        <div className="flex flex-row justify-between">
          <div className="flex gap-4 text-lg relative h-12">
            <button className="px-4 py-2 h-11 bg-orange-200 rounded-sm hover:-mt-2 duration-200">ویژه</button>
            <button className="px-4 py-2 h-11 bg-gray-200 rounded-sm  hover:-mt-2 duration-200">محبوب</button>
            <button className="px-4 py-2 h-11 bg-gray-200 rounded-sm hover:-mt-2 duration-200">تازه اضافه شده</button>

          </div>
          <div className="flex flex-row items-center gap-1 text-green-800 font-bold">
            دیدن بقیه
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>

          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8" >
          <ProductCardComponent color="bg-red-400" title="جدید" />
          <ProductCardComponent color="bg-orange-400" title="پرفروش" />
          <ProductCardComponent color="bg-pink-400" title="فروش" />
          <ProductCardComponent color="bg-green-200" title="فروش" />
        </div>
        <div className="flex flex-row justify-between">

          <h1 className="text-2xl font-bold text-green-800">دسته بندی های<span className="text-black"> محبوب</span></h1>
          <div className="flex flex-row-reverse items-center gap-1 text-green-800 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 rounded-full bg-green-100 hover:bg-green-200">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 rounded-full bg-green-100 hover:bg-green-200">
              <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8" >
          <CategoryCardComponent />
          <CategoryCardComponent />
          <CategoryCardComponent />
          <CategoryCardComponent />

        </div>

      </div>
    </>
  );
}
