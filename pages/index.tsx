import ProductCardComponent from "@/components/product-card.tsx/product-card";
import CategoryCardComponent from "@/components/category-card/category-card";
import SliderMainComponent from "@/components/slider/slider-main";
import ServiceCardComponent from "@/components/service-card/service-card";
import PcNavbarComponent from "@/components/shared/navbar/pc-navbar";
import SliderBrandComponent from "@/components/slider/slider-brand";
import NewsletterComponent from "@/components/newsletter/newsletter";
import BannerComponent from "@/components/banner/banner";
import FooterComponent from "@/components/footer/footer";
import BannerBigComponent from "@/components/banner/banner-big";
import MainLayout from "./main-layout";
import { ReactElement } from "react";


// This gets called on every request
export async function getServerSideProps() {


  const baseURL = process.env.NEXT_PUBLIC_BASEURL;
  // const res = await fetch(`${baseURL}/api/wbproducts`);
  // const repo = await res.json();
  // const products = JSON.stringify(repo);

  // const res_settings = await fetch(`${baseURL}/api/wbsettings/1`);
  // const repo_settings = await res_settings.json();
  // const settings = JSON.stringify(repo_settings);

  // const res_categories = await fetch(`${baseURL}/api/wbcategories`);
  // const repo_categories = await res_categories.json();
  // const categories = JSON.stringify(repo_categories);

  // const res_brands = await fetch(`${baseURL}/api/wbbrands`);
  // const repo_brands = await res_brands.json();
  // const brands = JSON.stringify(repo_brands);
  const init_data = await fetch(`${baseURL}/init`);
  const repo_data = await init_data.json();
  const data = JSON.stringify(repo_data);
  return { props: { data } };
}

export default function Home({ data }: any) {
  const result = JSON.parse(data)
  const products = result.products;
  const categories = result.categories;
  const settings = result.settings[0];
  const brands = result.brands;
  return (
    <div className="">
      {/* extera border for mobile-navbar */}
      <div className="border-t border-black md:hidden"></div>
      <div className="pt-4 px-10 flex flex-col gap-4 ">
        <div className="flex flex-row justify-between">
          {settings && (
            <SliderMainComponent images={settings.slideImages} />
          )}
        </div>

        <ServiceCardComponent />
        <div>
          <BannerBigComponent image="banner-8.jpg" title="تخفیف ۴۰ ٪ بمناسبت روز مادر" main="روز مادر مبارک." footer="" />
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

        <div className="flex flex-col items-center justify-center sm:items-start bg-[#F4F1F0] p-4 gap-4">
          <h1 className="text-2xl font-bold text-green-800">مارک ویژه<span className="text-black"> محبوب</span></h1>
          <SliderBrandComponent images={brands} />
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 p-10">
        <BannerComponent image="banner-1.png" title="پیشنهاد هوشمندانه"
          main="۲۰ ٪ پس انداز کنید کیف زنانه" footer="" />
        <BannerComponent image="banner-2.png" title="حراج" main="تابستان گرم عالی مجموعه" footer="" />
        <BannerComponent image="banner-3.png" title="ورود جدید" main="خرید امروز معاملات و پیشنهادات" footer="" />
      </div>

      <div className="pt-4 px-10 flex flex-col gap-4">
        <BannerBigComponent image="banner-4.png" title="ورود جدید" main="خرید امروز معاملات و پیشنهادات" footer="" />
      </div>
      <div className="pt-4 px-10 flex flex-col gap-4">
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
          {categories.map((item: any) => (
            <CategoryCardComponent key={item._id}  {...item} />
          ))}

        </div>
      </div>
      <NewsletterComponent />


      <FooterComponent />
    </div>

  );
}
Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
