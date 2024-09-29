export default function AboutCommentComponent({ image, title, main }: any) {
  return (
    <div className="flex flex-col sm:flex-row gap-10 p-10">
      <div className="flex flex-row p-4 border gap-4 h-fit shadow-md shadow-gray-400 hover:mt-1 duration-200 transition-all rounded-lg">
        <div className="flex flex-col items-center justify-start w-1/4 ">
          <img src="/company/company-3.jpg" className="w-20 h-20" />
        </div>
        <div className="flex flex-col w-full p-4 ">
          <h1>J. Bezos</h1>
          <h1 className="text-gray-400 mb-4">مدیر شرکت ادوبی</h1>
          <p>پیراهن پاییزی مناسب ورزش تولید سادگی نامفهوم از صنعت. شاید بهتر این به نظرم بیاد ولی بازم همون چیزی هست که من میخوام</p>
        </div>
      </div>

      <div className="flex flex-row p-4 border gap-4 h-fit shadow-md shadow-gray-400 hover:mt-1 duration-200 transition-all rounded-lg">
        <div className="flex flex-col items-center justify-start w-1/4 ">
          <img src="/company/company-3.jpg" className="w-20 h-20" />
        </div>
        <div className="flex flex-col w-full p-4 ">
          <h1>J. Bezos</h1>
          <h1 className="text-gray-400 mb-4">مدیر شرکت ادوبی</h1>
          <p>پیراهن پاییزی مناسب ورزش تولید سادگی نامفهوم از صنعت. شاید بهتر این به نظرم بیاد ولی بازم همون چیزی هست که من میخوام</p>
        </div>
      </div>

      <div className="flex flex-row p-4 border gap-4 h-fit shadow-md shadow-gray-400 hover:mt-1 duration-200 transition-all rounded-lg">
        <div className="flex flex-col items-center justify-start w-1/4 ">
          <img src="/company/company-3.jpg" className="w-20 h-20" />
        </div>
        <div className="flex flex-col w-full p-4 ">
          <h1>J. Bezos</h1>
          <h1 className="text-gray-400 mb-4">مدیر شرکت ادوبی</h1>
          <p>پیراهن پاییزی مناسب ورزش تولید سادگی نامفهوم از صنعت. شاید بهتر این به نظرم بیاد ولی بازم همون چیزی هست که من میخوام</p>
        </div>
      </div>

    </div>
  )
}