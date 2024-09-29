import Link from "next/link";

export default function BasketComponent({ props }: any) {
  return (
    <div className="flex flex-col sm:flex-row justify-between container border border-gray-300 bg-white rounded-lg m-4 p-2 gap-2">
      <div className="w-full flex flex-col border rounded-lg p-4  text-sm">
        <div className="flex flex-row justify-between">
          <h1>
            سبد خرید شما
          </h1>
          <button>...</button>
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
  );
}
