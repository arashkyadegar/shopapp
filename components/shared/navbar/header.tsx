export default function HeaderComponent() {
  return (<div className="text-xs  sticky  top-0 hidden z-10 bg-lime-200 h-10  pt-2 justify-end border-b-2 border-green-500">
    <div className="group flex z-50 w-full text-sm">
      <button
        aria-haspopup="true"
        aria-controls="menu"
        className="outline-none   focus:outline-none px-3 py-1 bg-transparent  rounded-sm flex items-center min-w-32"
      >
        <span className="pr-1 font-semibold flex-1 mb-1">
          (+۰۱) - ۲۳۴۵ - ۶۷۸۹</span>

      </button>


      <button
        aria-haspopup="true"
        aria-controls="menu"
        className="outline-none focus:outline-none px-3 py-1 bg-transparent  rounded-sm flex items-center min-w-32"
      >
        <span className="pr-1 font-semibold flex-1 mb-1">مکان ما</span>

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
        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">دامن</li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">دامن</li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">دامن</li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">دامن</li>




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