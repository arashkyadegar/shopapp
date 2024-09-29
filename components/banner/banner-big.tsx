export default function BannerBigComponent({ image, title, main }: any) {
  const url = `/banner/${image}`;
  return (
    <div className="relative overflow-hidden group text-xs md:text-lg" >
      <img className="w-full " src={url} alt={title} />
      <div className="flex flex-row  absolute  justify-between top-2 right-4 group-hover:right-6 transition-all duration-150">
        <h1 className="  text-gray-500 text-xs">{title}</h1>
        <div className="absolute flex flex-row sm:flex-col  top-4 gap-4 w-96 ">
          <h1 className="">{main}</h1>
          <button className="px-3 hover:font-bold w-fit bg-transparent text-blue-600 md:bg-lime-600 md:text-white">بیشتر بدانید</button>

        </div>

      </div>
    </div>
  );
}
