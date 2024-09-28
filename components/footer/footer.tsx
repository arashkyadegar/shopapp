import { div } from "framer-motion/client"

export default function FooterComponent({ categories }: any) {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row m-6">
          <div className="flex flex-col w-full sm:w-2/3 gap-1 text-gray-500">
            <p>تماس با ما</p>
            <p className="">
              <a className="font-bold text-black">آدرس : </a>
              ۵۶۲ ۵۶۲  ولینگتون میدان, اولین کوچه
              پلاک ۳۲, سان فرانسیسکو ، واحد
            </p>
            <p><a className="font-bold text-black">موبایل : </a>
              +۰۱ ۲۲۲۲ ۳۶۵ /(+۹۱) ۰۱ ۲۳۴۵ </p>
            <p><a className="font-bold text-black">ساعت ها : </a>
              ۱۰:۰۰ - ۱۸:۰۰, دوشنبه تا سه شنبه</p>
            <p className=" my-2 font-bold text-black">ما را دنبال کنید</p>
            <div className="flex flex-row gap-2 text-gray-500 ">
              <a href="#"><img src="/icon/facebook-svgrepo-com.svg" /></a>
              <a href="#"><img src="/icon/instagram-svgrepo-com.svg" /></a>
              <a href="#"><img src="/icon/pinterest-180-svgrepo-com.svg" /></a>
              <a href="#"><img src="/icon/twitter-svgrepo-com.svg" /></a>
              <a href="#"><img src="/icon/youtube-168-svgrepo-com.svg" /></a>





            </div>
          </div>
          <div className="w-full flex flex-col sm:w-1/3 text-gray-500 gap-1">
            <p className="font-bold text-black">درباره</p>
            <ul className="w-2/3 flex flex-col gap-1 ">
              <li><a href="#" className="hover:mr-1 transition-all duration-200">درباره ما</a></li>
              <li><a href="#" className="hover:mr-1 transition-all duration-200">اطلاعات تحویل</a></li>
              <li><a href="#" className="hover:mr-1 transition-all duration-200">سیاست حفظ حریم خصوصی</a></li>
              <li><a href="#" className="hover:mr-1 transition-all duration-200">شرایط و ضوابط</a></li>
              <li><a href="#" className="hover:mr-1 transition-all duration-200">با ما تماس بگیرید</a></li>
              <li><a href="#" className="hover:mr-1 transition-all duration-200">مرکز پشتیبانی</a></li>
            </ul>
          </div>
          <div className="w-full flex flex-col sm:w-1/3 text-gray-500  gap-1">
            <p className="font-bold text-black">اکانت ما</p>
            <ul className="w-full flex flex-col gap-1">
              <li><a href="#" className="hover:mr-1 transition-all duration-200">ورود</a></li>
              <li><a href="#" className="hover:mr-1 transition-all duration-200">مشاهده سبد خرید</a></li>
              <li><a href="#" className="hover:mr-1 transition-all duration-200">لیست علاقه مندی های من</a></li>
              <li><a href="#" className="hover:mr-1 transition-all duration-200">سفارش مرا پیگیری کنید</a></li>
              <li><a href="#" className="hover:mr-1 transition-all duration-200">کمک</a></li>
              <li><a href="#" className="hover:mr-1 transition-all duration-200">سفارش</a></li>
            </ul>
          </div>
          <div className="w-full flex flex-col sm:w-1/3 text-gray-500  gap-1">
            <p className="font-bold text-black">نصب برنامه</p>
            <ul className="w-full flex flex-col gap-1">
              <li><a className="">از اپ استور یا گوگل پلی</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end border-t  text-sm  text-gray-500  m-6 p-4">
        <p>کلیه حقوق محفوظ است </p>
      </div>
    </>
  );
}