export default function HeaderComponent() {
  return (<div className="text-xs hidden md:flex z-10 bg-lime-200 h-10  pt-2 justify-end border-b-2 border-green-500">
    <div className="group flex z-50 w-full text-sm">
      <button
        aria-haspopup="true"
        aria-controls="menu"
        className="outline-none focus:outline-none px-3 py-1 bg-transparent  rounded-sm flex flex-row justify-center items-center min-w-32"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>

        <a className="pr-1 font-semibold ">
          (+۰۱) - ۲۳۴۵ - ۶۷۸۹</a>
      </button>
      <button
        aria-haspopup="true"
        aria-controls="menu"
        className="outline-none focus:outline-none px-3 py-1 bg-transparent  rounded-sm flex flex-row justify-center items-center min-w-32"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        <a className="font-semibold mb-1">
          مکان ما</a>

      </button>
    </div>
    <div className="group block z-50">
      <button
        aria-haspopup="true"
        aria-controls="menu"
        className="outline-none focus:outline-none  px-3 py-1 bg-transparent rounded-sm flex items-center min-w-32"
      >
        <span className="pr-1 font-semibold flex-1">انگلیسی</span>
        <span>
          <svg
            className="fill-current h-4 w-4 transform  group-hover:-rotate-180
transition duration-200 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </span>
      </button>
      <ul
        id="menu"
        aria-hidden="true"
        className="bg-white border mr-5 rounded-sm transform scale-0 group-hover:scale-100 absolute 
transition duration-200 ease-in-out origin-top min-w-32"
      >
        <li className="flex flex-row-reverse gap-2 justify-center items-center rounded-sm px-3 py-1 hover:bg-gray-100">فرانسه
          <img src="/flag-dt.png" className="w-4" />
        </li>
        <li className="flex flex-row-reverse gap-2 justify-center items-center rounded-sm px-3 py-1 hover:bg-gray-100">آلمان
          <img src="/flag-fr.png" className="w-4" />
        </li>
        <li className="flex flex-row-reverse gap-2 justify-center items-center rounded-sm px-3 py-1 hover:bg-gray-100">روسی
          <img src="/flag-ru.png" className="w-4" />
        </li>
      </ul>
    </div>

    <div className="group block z-50">
      <button
        aria-haspopup="true"
        aria-controls="menu"
        className="outline-none focus:outline-none px-3 py-1 bg-transparent  rounded-sm flex items-center min-w-32"
      >
        <span className="pr-1 font-semibold flex-1">ورود / ثبت نام</span>

      </button>

    </div>
  </div>);
}