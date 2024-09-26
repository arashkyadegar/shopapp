import { categoriesFetched } from "@/redux/store/category/categories";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { useEffect } from "react";

export default function MegaMenuComponent({ categories }: any) {
  const categriesState = useAppSelector((state) => state.entities.categories);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(categoriesFetched(categories));
  }, []);

  return (
    <div className="relative ">
      {/* mega-menu-hamburger btn */}
      <button className="flex flex-row items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <a className="text-[#088178]">دسته بندی کالاها</a>
      </button>
      {/* mega-menu-div */}
      <div className="bg-gray-50 text-sm absolute mt-4 right-4 flex flex-row  w-[900px] h-60 border border-gray-300">
        <ul className="w-1/4 overflow-y-scroll bg-gray-100" >
          {categriesState.list.filter(item => item.parent == 0).map((item) => (
            <li className="  cursor-pointer transition-all duration-150  flex flex-row items-center gap-2 px-2 py-3 hover:text-red-400 hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <a>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className=" bg-gray-50 flex flex-col w-full p-4 border border-red-400">
          <h1 className="text-blue-600">همه محصولات کالای دیجیتال</h1>
          <div className="w-full p-2 grid grid-cols-5 ">
            <div className="grid-cols-1  text-black">
              <a className="font-bold text-sm text-red-600 ml-1">|</a>
              <a className=" hover:text-red-600 font-bold">۱ کالای دیجیتال</a>
              <div className="  cursor-pointer transition-all duration-150 flex flex-col items-start gap-2  py-3 text-gray-400 text-xs">
                {categriesState.list.map((item: any) => (
                  item.children.map((child: any) => (
                    <a className=" hover:text-red-600 ">{child.name}</a>
                  ))
                ))}

                {/* <a className=" hover:text-red-600">۲ کالای دیجیتال</a>
                <a className=" hover:text-red-600">۳ کالای دیجیتال</a>
                <a className=" hover:text-red-600">۴ کالای دیجیتال</a>
                <a className=" hover:text-red-600">۵ کالای دیجیتال</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}