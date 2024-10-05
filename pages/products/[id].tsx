import ProductCardStarComponent from "@/components/product-card.tsx/product-card-star";
import SmTitleComponent from "@/components/shared/sm-title";
import { turnToFa } from "@/utility/regex";
import getDefaultImageAvator from "@/utility/imageUtility";
import { ReactElement, useEffect } from "react";
import MainLayout from "../main-layout";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { searchProductsAction } from "@/redux/store/search/search-action";
import ProductCardComponent from "@/components/product-card.tsx/product-card";
import { getNewPrice } from "@/utility/discount";
import Image from "next/image";
// This gets called on every request
export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const baseURL = process.env.NEXT_PUBLIC_BASEURL;
  const res = await fetch(`${baseURL}/api/wbproducts/${id}`);
  const repo = await res.json();
  const product = JSON.stringify(repo);
  return { props: { product } };
}


export default function Product({ product }: any) {

  const item = JSON.parse(product)[0];
  console.log(item)
  const Desc = { __html: item.desc };
  const longDesc = { __html: item.longdesc };
  const mainImage = item.images.find((x: any) => x.status);
  const dispatch = useAppDispatch();
  const productsState = useAppSelector((state) => state.entities.products);

  useEffect(() => {
    dispatch(searchProductsAction(item.name));
  }, []);
  return (
    <>
      {/* extera border for mobile-navbar */}
      <div className="border-t border-black md:hidden"></div>
      <div className="flex flex-col sm:flex-row p-10  gap-4">
        <div className="w-full flex flex-col gap-2">
          <Image
            key={mainImage.name}
            src={getDefaultImageAvator(mainImage.name)}
            alt={mainImage ? mainImage.alt : ""}
            width={500}
            height={500}
          />

          <div className="flex flex-row justify-center gap-2">
            {item.images.map((item: any) => (
              <Image
                key={item.name}
                src={getDefaultImageAvator(item.name)}
                alt={item.name}
                width={500}
                height={500}
                className="w-20 border hover:border-green-200 cursor-pointer" />
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          <div></div>
          <h1 className="text-3xl font-bold">{item.name}</h1>
          <div className="flex flex-col sm:flex-row justify-between border-b border-gray-200 pb-2">
            <h1>برند : بوت استرپ</h1>

            <div className="flex flex-row items-center">
              <ProductCardStarComponent />
              <ProductCardStarComponent />
              <ProductCardStarComponent />
              <ProductCardStarComponent />
              <h1>(۲۵ بازخورد)</h1>
            </div>

          </div>
          {item.tags && (
            <div className="flex flex-row gap-2 text-xs ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
              </svg>
              <a>دسته :</a>
              {item.tags.map((item: any) => (
                <a key={item} href="#" className="text-gray-400">{item}</a>
              ))}
            </div>
          )}
          <h5 className="text-2xl p-2 flex flex-col sm:flex-row text-green-600 text-right font-semibold  dark:text-white  border-b border-gray-200">
            <span className="text-red-600 line-through ml-5">
              {turnToFa(item.price)}  تومان
            </span>

            <a>{turnToFa((getNewPrice(item.price, item.discount).toString()))}  تومان</a>

            <span className="text-gray-400 mr-5 text-md">
              %{turnToFa(item.discount)}
            </span>
          </h5>

          <p className="leading-relaxed">
            {item.shortDesc}
          </p>
          <div className="mt-6">
            <ul className="flex flex-col  gap-1 text-sm">
              <li className="flex flex-row gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>

                <a>سال ضمانت برند الجزیره ۱</a>
              </li>
              <li className="flex flex-row gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                <a>  سیاست بازگشت روز</a>
              </li>
              <li className="flex flex-row gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>

                <a>  سیاست بازگشت روز</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className="flex flex-col p-6 ">

        <div className="flex flex-col mx-10  mb-10">
          <div className="border-b border-gray-200 mb-4">
            <h1 className="border-b w-fit border-green-700 pb-2  font-bold text-2xl">شرح</h1>
          </div>
          <div dangerouslySetInnerHTML={Desc} className="leading-relaxed" />
        </div>
        <div className="flex flex-col mx-10  mb-10">
          <div className="border-t border-gray-200 mb-4 pt-2">
            <div dangerouslySetInnerHTML={longDesc} className="leading-relaxed" />
          </div>
        </div>
        {item.extras && (
          <div className="flex flex-col mx-10  mb-10" >
            <div className="border-b border-gray-200 mb-4">
              <h1 className="border-b w-fit border-green-700 pb-2  font-bold text-2xl">اطلاعات اضافی</h1>
            </div>

            <div className="flex flex-col text-md border" >
              {item.extras.map((item: any) => (
                <div className="flex flex-row text-md border" key={item.name}>
                  <div className="w-full border-l border-b p-2 bg-white">{item.name}</div>
                  <div className="w-full border-l border-b p-2 bg-gray-50">{ item.value}</div>
                </div>
              ))}
            </div>
          </div>

        )}

        <div className="flex flex-col mx-10  mb-10">
          <div className="border-b border-gray-200 mb-4">
            <h1 className="border-b w-fit border-green-700 pb-2  font-bold text-2xl">بررسی مشتری</h1>
            <div className="px-4">
              <div className="flex flex-row  items-center">
                <SmTitleComponent title="۵" />
                <div className="flex w-full bg-gray-200 h-4 rounded-sm overflow-hidden">
                  <div className=" w-2/3 h-full bg-teal-600 text-white text-center items-center justify-center text-xs "><a>35%</a></div>
                </div>
              </div>

              <div className="flex flex-row  items-center">
                <SmTitleComponent title="۴" />
                <div className="flex w-full bg-gray-200 h-4 rounded-sm overflow-hidden">
                  <div className=" w-4/12 h-full bg-teal-600 text-white text-center items-center justify-center text-xs "><a>35%</a></div>
                </div>
              </div>

              <div className="flex flex-row  items-center">
                <SmTitleComponent title="۳" />
                <div className="flex w-full bg-gray-200 h-4 rounded-sm overflow-hidden">
                  <div className=" w-10/12 h-full bg-teal-600 text-white text-center items-center justify-center text-xs "><a>35%</a></div>
                </div>
              </div>

              <div className="flex flex-row  items-center">
                <SmTitleComponent title="۲" />
                <div className="flex w-full bg-gray-200 h-4 rounded-sm overflow-hidden">
                  <div className=" w-5/12 h-full bg-teal-600 text-white text-center items-center justify-center text-xs "><a>۳۵%</a></div>
                </div>
              </div>

              <div className="flex flex-row  items-center">
                <SmTitleComponent title="۱" />
                <div className="flex w-full bg-gray-200 h-4 rounded-sm overflow-hidden">
                  <div className=" w-1/12 h-full bg-teal-600 text-white text-center items-center justify-center text-xs "><a>۱۰%</a></div>
                </div>
              </div>
              <h1 className=" text-sm text-gray-400 py-4">
                چگونه رتبه بندی ها محاسبه می شود؟
              </h1>
            </div>

          </div>
        </div>

        <div className="flex flex-col mx-10  mb-10">
          <div className="border-b border-gray-200 mb-4">
            <h1 className="border-b w-fit border-green-700 pb-2  font-bold text-2xl">محصولات مرتبط</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8  h-80" >
            {productsState.list.filter((x: any) => x._id != item._id).map((product: any) => (
              <ProductCardComponent key={product._id}  {...product} />
            ))}
          </div>
        </div>
      </div>


    </>
  );
}

Product.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
