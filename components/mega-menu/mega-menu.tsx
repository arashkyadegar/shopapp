export default function MegaMenuComponent({ categories }: any) {
  console.log(categories)
  return (
    <div className="relative">
      {/* mega-menu-hamburger btn */}
      <button className="flex flex-row items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <a className="text-[#088178]">دسته بندی کالاها</a>
      </button>
      {/* mega-menu-div */}
      <div className=" text-sm absolute mt-4 right-4 flex flex-row  w-[900px] h-60 border border-gray-300">
        <ul className="w-1/4 overflow-y-scroll bg-gray-100" >
          {categories.map((item: any) => (
            <li className="  cursor-pointer transition-all duration-150  flex flex-row items-center gap-2 px-2 py-3 hover:text-red-400 hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <a>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className="w-full p-2 grid grid-cols-4 grid-rows-2 overflow-y-scroll bg-gray-50">
          <div className="grid-cols-1 m-2  text-gray-400">
            <div className="flex flex-row items-center mb-4 gap-2">
              <a className="text-black" href="">لب تاپ</a>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 text-red-500">
                <path fillRule="evenodd" d="M10.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L12.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z" clip-rule="evenodd" />
                <path fillRule="evenodd" d="M4.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L6.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z" clip-rule="evenodd" />
              </svg>
            </div>
            <ul className="">
              <li>مورد اول</li>
              <li>مورد اول</li>
              <li>مورد اول</li>
              <li>مورد اول</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}