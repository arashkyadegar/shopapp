import { ReactElement } from "react";
import MainLayout from "./main-layout";
// This gets called on every request
export async function getServerSideProps() {
  const baseURL = process.env.NEXT_PUBLIC_BASEURL;
  const res_faqs = await fetch(`${baseURL}/api/wbfaqs`);
  const repo_faqs = await res_faqs.json();
  const faqs = JSON.stringify(repo_faqs);

  return { props: { faqs } };
}
export default function Faq({ faqs }: any) {
  const items = JSON.parse(faqs);
  return (
    <>
      {/* extera border for mobile-navbar */}
      <div className="border-t border-black md:hidden"></div>
      <div className="flex flex-col gap-10 p-4">
        {items.map((item: any) => (
          <div key={item._id} className="flex flex-col sm:flex-row justify-between container  bg-white rounded-lg p-2 gap-2">
            <div className="w-full flex flex-col gap-2">
              <h1 className="text-2xl font-bold mb-2">
                {item.question}
              </h1>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}

      </div>
    </>
  );
}

Faq.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
