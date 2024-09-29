export default function NewsletterComponent() {
  return (
    <div className="flex flex-col sm:flex-row justify-between bg-amber-200 p-4">
      <div className="flex  flex-col sm:flex-row w-full justify-between sm:justify-evenly gap-4 p-4">
        <div className="flex items-center justify-center font-bold gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>

          <h1 className="text-xl">در خبرنامه ثبت نام کنید</h1>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-md">دریافت کردن ۲۰ تومان و ...تومان ۲۵ کوپن برای خرید اول.</h1>
        </div>
      </div>
      <div className="w-full flex flex-col sm:w-2/5 justify-center items-center">
        <div className="flex flex-row w-full  bg-gray-50   text-gray-900 text-sm rounded-lg overflow-hidden ">
          <input type="text" className="w-full bg-gray-50  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
          <button className="bg-black text-white  w-24 ">دنبال</button>
        </div>
      </div>

    </div >
  )
}