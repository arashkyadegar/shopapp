import { ReactElement } from "react";
import MainLayout from "./main-layout";
// This gets called on every request
export async function getServerSideProps() {
  const baseURL = process.env.NEXT_PUBLIC_BASEURL;
  const res_faqs = await fetch(`${baseURL}/faqgroups`);
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
          <div key={item._id}
            className={
              item.display
                ? "flex flex-col justify-between container  bg-white rounded-lg p-2 gap-2 border"
                : "hidden"
            }
          >
            <h1>{item.name}</h1>
            {item.faqs.map((faq: any) => (
              <div key={item._id}
                className={
                  item.display
                    ? "w-full flex flex-col gap-2 p-2"
                    : "hidden"
                }
              >
                <h1 className="text-2xl font-bold m-2">
                  {faq.question}
                </h1>
                <p className="text-lg text-gray-500 font-bold m-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        ))}

      </div >
    </>
  );
}

Faq.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
