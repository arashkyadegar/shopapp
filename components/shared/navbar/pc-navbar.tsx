export default function PcNavbarComponent({ props }: any) {
  return (
    <nav className="sticky z-10 bg-white top-0 h-10 flex flex-row  font-bold  pt-2 justify-between text-lg">
      <div className="flex w-1/4 flex-row    justify-center">
        <div className="text-[#088178]">
          <a>دسته ها را مرور کنید</a>
        </div>
      </div>

      <div className="flex  w-full flex-row justify-between   ">
        <div className=" hover:text-[#088178] cursor-pointer flex flex-row   px-2 py-1 items-center gap-2">
          <a>خانه</a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>

        </div>

        <div className=" hover:text-[#088178] cursor-pointer  flex flex-row   px-2 py-1 items-center gap-2">
          <a>درباره ما</a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

        <div className="hover:text-[#088178] cursor-pointer  flex flex-row   px-2 py-1 items-center gap-2">
          <a>فروشگاه</a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

        <div className="hover:text-[#088178] cursor-pointer  flex flex-row   px-2 py-1 items-center gap-2">
          <a>مگا منو</a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

        <div className="hover:text-[#088178] cursor-pointer  flex flex-row   px-2 py-1 items-center gap-2">
          <a>بلاگ</a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

        <div className="hover:text-[#088178] cursor-pointer  flex flex-row   px-2 py-1 items-center gap-2">
          <a>صفحات</a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>


        <div className="hover:text-[#088178] cursor-pointer  flex flex-row   px-2 py-1 items-center gap-2">
          <a>تماس با ما</a>

        </div>
      </div>

      <div className="flex w-1/4 flex-row   justify-center">
        <div className="hover:text-[#088178] ">
          <a>هات لاین</a>
        </div>
      </div>
    </nav>
  )
}