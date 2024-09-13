import ProductCardComponent from "@/components/product-card.tsx/product-card";
import ProductCardCenteredComponent from "@/components/product-card.tsx/product-card-centered";
import ProductCardStarComponent from "@/components/product-card.tsx/product-card-star";

export default function Product() {
  return (
    <>
      <div className="flex flex-row p-10  gap-4">
        <div className="w-full flex flex-col">
          <img src="/imgs/product-16-2.jpg" />

        </div>
        <div className="w-full flex flex-col gap-4">

          <h1 className="text-3xl font-bold">پیراهن ساده با طرح طبیعت HD450</h1>
          <div className="flex flex-row justify-between border-b border-gray-200 pb-2">
            <h1>برند : بوت استرپ</h1>

            <div className="flex flex-row items-center">
              <ProductCardStarComponent />
              <ProductCardStarComponent />
              <ProductCardStarComponent />
              <ProductCardStarComponent />
              <h1>(۲۵ بازخورد)</h1>
            </div>

          </div>
          <h5 className="text-2xl mt-2 px-4 text-green-600 text-right font-semibold tracking-tight dark:text-white  border-b border-gray-200 pb-2">
            تومان ۱۳۴.۵۸
          </h5>
          <div className="">
            <p>پیراهن پاییزی مناسب ورزش تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای</p>
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              <li>سال ضمانت برند الجزیره</li>
              <li>سال ضمانت برند الجزیره</li>
              <li>سال ضمانت برند الجزیره</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-6 ">
        <div className="flex flex-col mx-10  mb-10">
          <div className="border-b border-gray-200 mb-4">
            <h1 className="border-b w-fit border-green-700 pb-2  font-bold text-2xl">شرح</h1>
          </div>
          <p>کارن به طور نامحسوس استخدام شده در گوریل کوالا عزیز و بسته به خوبی و بسیار خوب از خوبی های بسیار دور و از خوبی های ناخوشایند و بی نظیر و بی نظیر در نزدیکی اسکالوپ بی نظیر بسیار مهم بازی کرد. محکم و عصبی با عصبانیت برخی و با عصبانیت عزیز این را از هم جدا می کنند.

            بنگاه های باریک و باریک و چپ در این را تعظیم کردند که بسیار زیاد سلام بر روی قاشق غذاخوری که افسوس که بسیار غنی شد و در برابر مکرر روان و روان و به طور مکرر به طور قابل ملاحظه ای گرفتند. علاوه بر این و خیلی دور از خوب است که یک چتر دریایی و یکی را به دلیل آن به وجود آورد.</p>
        </div>


        <div className="flex flex-col mx-10  mb-10">
          <div className="border-b border-gray-200 mb-4">
            <h1 className="border-b w-fit border-green-700 pb-2  font-bold text-2xl">محصولات مرتبط</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8  h-80" >
            <ProductCardCenteredComponent color="bg-red-400" title="جدید" />
            <ProductCardCenteredComponent color="bg-orange-400" title="پرفروش" />
            <ProductCardCenteredComponent color="bg-pink-400" title="فروش" />
            <ProductCardCenteredComponent color="bg-green-200" title="فروش" />
          </div>
        </div>
      </div>
    </>
  );
}