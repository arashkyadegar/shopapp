import { div } from "framer-motion/client"

export default function FooterComponent({ categories }: any) {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col w-full sm:w-2/3 border border-red-300  gap-1">
            <p>فروشگاه ساز</p>
            <p>تماس با ما</p>
            <p className="">
              <a className="font-bold">آدرس : </a>
              562 562 ولینگتون میدان, اولین کوچه
              پلاک 32, سان فرانسیسکو ، واحد
            </p>
            <p><a className="font-bold">موبایل : </a>
            +01 2222 365 /(+91) 01 2345 </p>
            <p><a className="font-bold">ساعت ها : </a>
            10:00 - 18:00, دوشنبه تا سه شنبه</p>
            <div className=" mt-4"><a className="font-bold">ما را دنبال کنید</a>
              <p>khfkjfhskdjfhsdkjfh</p></div>
          </div>
          <div className="w-full sm:w-1/3 border border-red-300">2</div>
          <div className="w-full sm:w-1/3 border border-red-300">3</div>
          <div className="w-full sm:w-1/3 border border-red-300">4</div>
        </div>
      </div>
      <div className="w-full border border-red-300">5</div>
    </>
  );
}