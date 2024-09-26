import MegaMenuComponent from "@/components/mega-menu/mega-menu";
import TreeView from "../treeview/treeview";

export default function PcNavbarComponent({ categories }: any) {
  return (
    <nav className="sticky hidden z-10 bg-white top-0 h-12 md:flex flex-row  pt-2 justify-center border-b border-black">
      <div className="group block z-50">
        <button
          aria-haspopup="true"
          aria-controls="menu"
          className="outline-none focus:outline-none px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
        >
          <span className="pr-1 font-semibold flex-1">صفحه اصلی</span>

        </button>

      </div>


      <div className="group block z-50">

        <button
          aria-haspopup="true"
          aria-controls="menu"
          className="outline-none focus:outline-none  px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
        >
          <span className="pr-1 font-semibold flex-1">زنانه</span>
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
          <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
            <button
              aria-haspopup="true"
              aria-controls="menu-lang"
              className="w-full text-right flex items-center justify-center outline-none focus:outline-none"
            >
              <span className="pr-1 flex-1">شلوار</span>
              <span className="mr-auto">
                <svg
                  className="fill-current h-4 w-4
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
              id="menu-lang"
              aria-hidden="true"
              className="bg-white border rounded-sm absolute top-0 right-64
  transition duration-200 ease-in-out origin-top-left
  min-w-32
  "
            >
              <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">شلوار جین</li>
              <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">شلوار کتان</li>
              <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">شلوار پارچه ای</li>

            </ul>
          </li>
          <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
            <button
              aria-haspopup="true"
              aria-controls="menu-lang"
              className="w-full text-right flex items-center justify-center outline-none focus:outline-none"
            >
              <span className="pr-1 flex-1">لباس راحتی</span>
              <span className="mr-auto">
                <svg
                  className="fill-current h-4 w-4
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
              id="menu-lang"
              aria-hidden="true"
              className="bg-white border rounded-sm absolute top-0 right-64
  transition duration-200 ease-in-out origin-top-left
  min-w-32
  "
            >
              <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">شلوار راحتی</li>
              <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">شلوار و شورتک</li>
              <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">نیم تنه</li>

            </ul>
          </li>

          <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
            <button
              aria-haspopup="true"
              aria-controls="menu-lang"
              className="w-full text-right flex items-center justify-center outline-none focus:outline-none"
            >
              <span className="pr-1 flex-1">بالاپوش</span>
              <span className="mr-auto">
                <svg
                  className="fill-current h-4 w-4
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
              id="menu-lang"
              aria-hidden="true"
              className="bg-white border rounded-sm absolute top-0 right-64
  transition duration-200 ease-in-out origin-top-left
  min-w-32
  "
            >
              <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">تونیک</li>

              <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">پیراهن</li>

              <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">مانتو</li>

            </ul>
          </li>
        </ul>
      </div>
      <div className="group block z-50">
        <button
          aria-haspopup="true"
          aria-controls="menu"
          className="outline-none focus:outline-none px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
        >
          <span className="pr-1 font-semibold flex-1">مردانه</span>
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180
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
          className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-200 ease-in-out origin-top min-w-32"
        >
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Programming</li>
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
          <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
            <button
              aria-haspopup="true"
              aria-controls="menu-lang"
              className="w-full text-right flex items-center justify-center outline-none focus:outline-none"
            >
              <span className="pr-1 flex-1">Langauges</span>
              <span className="mr-auto">
                <svg
                  className="fill-current h-4 w-4
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
              id="menu-lang"
              aria-hidden="true"
              className="bg-white border rounded-sm absolute top-0 right-64
  transition duration-200 ease-in-out origin-top-left
  min-w-32
  "
            >
              <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
              <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                <button
                  aria-haspopup="true"
                  aria-controls="menu-lang-python"
                  className="w-full text-right flex items-center outline-none focus:outline-none"
                >
                  <span className="pr-1 flex-1">Python</span>
                  <span className="mr-auto">
                    <svg
                      className="fill-current h-4 w-4
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
                  id="menu-lang-python"
                  aria-hidden="true"
                  className="bg-white border rounded-sm absolute top-0 right-64 
      transition duration-200 ease-in-out origin-top-left
      min-w-32
      "
                >
                  <li className="px-3 py-1 hover:bg-gray-100">2.7</li>
                  <li className="px-3 py-1 hover:bg-gray-100">3+</li>
                </ul>
              </li>
              <li className="px-3 py-1 hover:bg-gray-100">Go</li>
              <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
            </ul>
          </li>
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
        </ul>
      </div>
      <div className="group block z-50">
        <button
          aria-haspopup="true"
          aria-controls="menu"
          className="outline-none focus:outline-none px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
        >
          <span className="pr-1 font-semibold flex-1">بچگانه</span>
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180
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
          className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-200 ease-in-out origin-top min-w-32"
        >
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Programming</li>
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
          <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
            <button
              aria-haspopup="true"
              aria-controls="menu-lang"
              className="w-full text-right flex items-center justify-center outline-none focus:outline-none"
            >
              <span className="pr-1 flex-1">Langauges</span>
              <span className="mr-auto">
                <svg
                  className="fill-current h-4 w-4
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
              id="menu-lang"
              aria-hidden="true"
              className="bg-white border rounded-sm absolute top-0 right-64
  transition duration-200 ease-in-out origin-top-left
  min-w-32
  "
            >
              <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
              <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                <button
                  aria-haspopup="true"
                  aria-controls="menu-lang-python"
                  className="w-full text-right flex items-center outline-none focus:outline-none"
                >
                  <span className="pr-1 flex-1">Python</span>
                  <span className="mr-auto">
                    <svg
                      className="fill-current h-4 w-4
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
                  id="menu-lang-python"
                  aria-hidden="true"
                  className="bg-white border rounded-sm absolute top-0 right-64 
      transition duration-200 ease-in-out origin-top-left
      min-w-32
      "
                >
                  <li className="px-3 py-1 hover:bg-gray-100">2.7</li>
                  <li className="px-3 py-1 hover:bg-gray-100">3+</li>
                </ul>
              </li>
              <li className="px-3 py-1 hover:bg-gray-100">Go</li>
              <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
            </ul>
          </li>
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
        </ul>
      </div>
      {/* <div className="group block z-50">
          <button
            aria-haspopup="true"
            aria-controls="menu"
            className="outline-none focus:outline-none px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
          >
            <span className="pr-1 font-semibold flex-1">نوزاد</span>
            <span>
              <svg
                className="fill-current h-4 w-4 transform group-hover:-rotate-180
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
            className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-200 ease-in-out origin-top min-w-32"
          >
            <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Programming</li>
            <li className="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-right flex items-center justify-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Langauges</span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
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
                id="menu-lang"
                aria-hidden="true"
                className="bg-white border rounded-sm absolute top-0 right-64
  transition duration-200 ease-in-out origin-top-left
  min-w-32
  "
              >
                <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    aria-controls="menu-lang-python"
                    className="w-full text-right flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">Python</span>
                    <span className="mr-auto">
                      <svg
                        className="fill-current h-4 w-4
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
                    id="menu-lang-python"
                    aria-hidden="true"
                    className="bg-white border rounded-sm absolute top-0 right-64 
      transition duration-200 ease-in-out origin-top-left
      min-w-32
      "
                  >
                    <li className="px-3 py-1 hover:bg-gray-100">2.7</li>
                    <li className="px-3 py-1 hover:bg-gray-100">3+</li>
                  </ul>
                </li>
                <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
              </ul>
            </li>
            <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
          </ul>
        </div> */}
      <div className="group block z-50">
        <button
          aria-haspopup="true"
          aria-controls="menu"
          className="outline-none focus:outline-none px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
        >
          <span className="pr-1 font-semibold flex-1">درباره ما</span>

        </button>

      </div>
      <div className="group block z-50">
        <button
          aria-haspopup="true"
          aria-controls="menu"
          className="outline-none focus:outline-none px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
        >
          <span className="pr-1 font-semibold flex-1">تماس با ما</span>

        </button>

      </div>

    </nav>
  )
}