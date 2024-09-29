export default function BannerComponent({ image, title, main }: any) {
  const url = `/banner/${image}`;
  return (
    <div className="relative group overflow-hidden" >
      <img className="w-full" src={url} alt={title} />
      <div className="absolute justify-between h-28 flex flex-col top-2 right-4 group-hover:right-6 transition-all duration-150">
        <div>
        <h1 className=" text-sm text-gray-500  border-red-400">{title}</h1>

        </div>
        <div>
        <h1 className=" text-lg text-wrap w-36  border-red-400">{main}</h1>

        </div>
        <div>
        <a href="#" className="  border-red-400 hover:text-sm text-xs text-green-800 transition-all duration-150">اکنون خرید کنید</a>

        </div>
      </div>
    </div>
  );
}
