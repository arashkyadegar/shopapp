import ProductCardCenteredComponent from "@/components/product-card.tsx/product-card-centered";
import ProductCardStarComponent from "@/components/product-card.tsx/product-card-star";
import PcNavbarComponent from "@/components/shared/navbar/pc-navbar";
import SmTitleComponent from "@/components/shared/sm-title";
import { turnToFa } from "@/utility/regex";
import { useRouter } from "next/router";
import { Markup } from 'interweave';
import { getDefaultImageAvator } from "@/utility/imageUtility";

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
  console.log(item);
  const description = { __html: item.longdesc };
  let mainImage = item.images.find((x: any) => x.status);
  return (
    <>
      <PcNavbarComponent />
      <div className="flex flex-row p-10  gap-4">
        <div className="w-full flex flex-col gap-2">
          <img
            src={mainImage ? getDefaultImageAvator(mainImage.name) : ""}
            alt={mainImage ? mainImage.alt : ""}
          />
          <div className="flex flex-row justify-center gap-2">
            {item.images.map((item: any) => (
              <img src={getDefaultImageAvator(item.name)} className="w-20 border hover:border-green-200 cursor-pointer" />
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">

          <h1 className="text-3xl font-bold">{item.name}</h1>
          <div className="flex flex-row justify-between border-b border-gray-200 pb-2">
            <h1>برند : بوت استرپ</h1>

            <div className="flex flex-row items-center">
              <ProductCardStarComponent />
              <ProductCardStarComponent />
              <ProductCardStarComponent />
              <ProductCardStarComponent />
              <h1>(۲۵ بازخورد)</h1>
            </div>

          </div>
          <h5 className="text-2xl mt-2 px-4 text-green-600 text-right font-semibold tracking-tight dark:text-white  border-b border-gray-200 pb-2">
            {turnToFa(item.price)}  تومان
          </h5>

          <div dangerouslySetInnerHTML={description} />
          <div>
            <ul className="flex flex-col gap-4">
              <li>سال ضمانت برند الجزیره</li>
              <li>سال ضمانت برند الجزیره</li>
              <li>سال ضمانت برند الجزیره</li>
            </ul>
          </div>
        </div>

      </div>
      <div className="flex flex-col p-6 ">

        <div className="flex flex-col mx-10  mb-10">
          <div className="border-b border-gray-200 mb-4">
            <h1 className="border-b w-fit border-green-700 pb-2  font-bold text-2xl">شرح</h1>
          </div>
          <p>{item.desc}</p>
        </div>
        <div className="flex flex-col mx-10  mb-10">
          <div className="border-t border-gray-200 mb-4 pt-2">
            {item.longdesc}
          </div>
        </div>
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
                <SmTitleComponent title="۱ ستاره" />
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
            <ProductCardCenteredComponent color="bg-red-400" title="جدید" />
            <ProductCardCenteredComponent color="bg-orange-400" title="پرفروش" />
            <ProductCardCenteredComponent color="bg-pink-400" title="فروش" />
            <ProductCardCenteredComponent color="bg-green-200" title="فروش" />
          </div>
        </div>
      </div>


    </>
  );
}