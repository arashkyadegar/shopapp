import ProductCardComponent from "@/components/product-card.tsx/product-card";
import CategoryCardComponent from "@/components/category-card/category-card";
import SliderMainComponent from "@/components/slider/slider-main";
import ServiceCardComponent from "@/components/service-card/service-card";
import PcNavbarComponent from "@/components/shared/navbar/pc-navbar";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { useEffect } from "react";
import { getCategoriesAction } from "@/redux/store/category/category-action";
import SliderBrandComponent from "@/components/slider/slider-brand";

// This gets called on every request
export async function getServerSideProps() {


  const baseURL = process.env.NEXT_PUBLIC_BASEURL;
  const res = await fetch(`${baseURL}/api/wbproducts`);
  const repo = await res.json();
  const products = JSON.stringify(repo);

  const res_settings = await fetch(`${baseURL}/api/wbsettings/1`);
  const repo_settings = await res_settings.json();
  const settings = JSON.stringify(repo_settings);

  const res_categories = await fetch(`${baseURL}/api/wbcategories`);
  const repo_categories = await res_categories.json();
  const categories = JSON.stringify(repo_categories);

  const res_brands = await fetch(`${baseURL}/api/wbbrands`);
  const repo_brands = await res_brands.json();
  const brands = JSON.stringify(repo_brands);

  return { props: { products, settings, categories, brands } };
}

export default function Home(props: any) {
  const products = JSON.parse(props.products);
  const settings = JSON.parse(props.settings)[0];
  const categories = JSON.parse(props.categories);
  const brands = JSON.parse(props.brands);
  return (
    <div className="">
      <PcNavbarComponent />
      <div className="pt-4 px-10 flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <SliderMainComponent images={settings.slideImages} />
        </div>

        <ServiceCardComponent />
        <div>
          <img src="/banner/banner-4.png" alt="" />
        </div>

        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col justify-center sm:justify-between sm:flex-row   gap-4 text-lg relative">
            <button className="px-4 py-2 h-11 bg-orange-200 rounded-sm hover:-mt-1 duration-150">ویژه</button>
            <button className="px-4 py-2 h-11 bg-gray-200 rounded-sm  hover:-mt-1 duration-150">محبوب</button>
            <button className="px-4 py-2 h-11 bg-gray-200 rounded-sm hover:-mt-1 duration-150">تازه اضافه شده</button>
          </div>
          <a href="#" className="flex flex-row items-center m-2 justify-center gap-2 text-green-800 font-bold">
            دیدن بقیه
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>

          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8" >
          {products.map((item: any) => (
            <ProductCardComponent key={item._id} color="bg-green-400" title="جدید" {...item} />
          ))}


        </div>

        <div>
          <h1 className="text-2xl font-bold text-green-800">مارک ویژه<span className="text-black"> محبوب</span></h1>
          <SliderBrandComponent images={brands} />
        </div>
      </div>

      <div className="flex flex-row w-full gap-8 p-10 ">
        <div >
          <img className="w-full" src="/banner/banner-1.png" alt="" />
        </div>
        <div>
          <img className="w-full" src="/banner/banner-2.png" alt="" />
        </div>
        <div>
          <img className="w-full" src="/banner/banner-3.png" alt="" />
        </div>

      </div>



      <div className="">
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
    </div>
  );
}
