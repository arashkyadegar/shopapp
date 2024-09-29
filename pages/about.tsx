import AboutCommentComponent from "@/components/about/about-comment";

export default function About() {
  return (
    <div className="flex flex-col gap-10 p-4">
      <div className="flex flex-col sm:flex-row justify-between container  bg-white rounded-lg p-2 gap-2">
        <div className="w-full flex flex-col gap-2">
          <h1>شرکت ما</h1>
          <h1 className="text-2xl font-bold mb-6">
            ما در حال ساخت مقصد برای انجام کارها هستیم</h1>
          <p >پیراهن پاییزی مناسب ورزش تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از .

            پیراهن پاییزی مناسب ورزش تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که</p>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-4">
          <div className="w-full ">
            <img src="/company/company-2.jpg" />
          </div>
          <div className="w-full">
            <img src="/company/company-3.jpg" />
          </div>
        </div>

      </div>
      <div className="flex flex-col sm:flex-row justify-between container  bg-white rounded-lg p-2 gap-2">
        <div className="w-full flex flex-col gap-2">
          <h1>تیم ما</h1>
          <h1 className="text-2xl font-bold mb-6">
            تیم برتر متخصصان
          </h1>
          <p >پیراهن پاییزی مناسب ورزش تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از .

            پیراهن پاییزی مناسب ورزش تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که</p>
        </div>
        <div className="w-full flex flex-row items-center justify-end gap-4">
          <button className="border  px-4 py-2 hover:-mt-4 transition-all duration-200">همه اعضا</button>
        </div>

      </div>
      <AboutCommentComponent />
    </div>
  );
}