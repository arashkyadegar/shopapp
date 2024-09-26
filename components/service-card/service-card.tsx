export default function ServiceCardComponent() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-6 text-xs sm:text-base gap-2">
      <div className="flex flex-col border border-green-200 p-4 justify-between gap-4 rounded-sm h-40 mt-6 hover:mt-4  transition-all duration-200">
        <img src="/feature-1.png" className="w-28" />
        <h1 className="text-[#088178] font-bold bg-pink-100 text-center py-2 rounded-md">حمل و نقل رایگان</h1>
      </div>


      <div className="flex flex-col border border-green-200 p-4 justify-between gap-4 rounded-sm h-40 mt-6 hover:mt-4  transition-all duration-200">
        <img src="/feature-2.png" className="w-28" />
        <h1 className="text-[#088178] font-bold bg-blue-100 text-center py-2 rounded-md">سفارش انلاین</h1>
      </div>


      <div className="flex flex-col border border-green-200 p-4 justify-between gap-4 rounded-sm h-40 mt-6 hover:mt-4  transition-all duration-200">
        <img src="/feature-3.png" className="w-28" />
        <h1 className="text-[#088178] font-bold bg-lime-100 text-center py-2 rounded-md">پس انداز کردن</h1>
      </div>


      <div className="flex flex-col border border-green-200 p-4 justify-between gap-4 rounded-sm h-40 mt-6 hover:mt-4  transition-all duration-200">
        <img src="/feature-4.png" className="w-28" />
        <h1 className="text-[#088178] font-bold bg-purple-100 text-center py-2 rounded-md">تبلیغات</h1>
      </div>

      <div className="flex flex-col border border-green-200 p-4 justify-between gap-4 rounded-sm h-40 mt-6 hover:mt-4  transition-all duration-200">
        <img src="/feature-5.png" className="w-28" />
        <h1 className="text-[#088178] font-bold bg-violet-100 text-center py-2 rounded-md">فروش مبارک</h1>
      </div>

      <div className="flex flex-col border border-green-200 p-4 justify-between gap-4 rounded-sm h-40 mt-6 hover:mt-4  transition-all duration-200">
        <img src="/feature-6.png" className="w-28" />
        <h1 className="text-[#088178] font-bold bg-orange-100 text-center py-2 rounded-md">پشتیبانی ۲۴/۷</h1>
      </div>
    </div>);
}