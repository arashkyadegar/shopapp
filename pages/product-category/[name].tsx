import { ReactElement } from "react";
import MainLayout from "../main-layout";
import router from "next/router";
import ProductCardComponent from "@/components/product-card.tsx/product-card";

export async function getServerSideProps(context: any) {
  const { name } = context.params;
  const { sort } = context.query;

  const baseURL = process.env.NEXT_PUBLIC_BASEURL;
  const res = await fetch(`${baseURL}/api/wbproducts?category=${name}&sortby=${sort}`);
  const repo = await res.json();
  const products = JSON.stringify(repo);
  return { props: { products, name } };
}


export default function Category({ products, name }: any) {


  const items = JSON.parse(products);
  function submitSearch(event: any): void {
    const text = event.target.value;
    router.push({
      pathname: `/product-category/${name}`,
       query: {
         sort: text
      }
    });
  }

  return (
    <>
      {/* extera border for mobile-navbar */}
      <div className="border-t border-black md:hidden"></div>
      <div className="flex flex-col p-10  gap-4">
        <div className="flex flex-row gap-2 justify-start  items-center">
          <label htmlFor="">نمایش بر اساس :</label>
          <select id="countries" onChange={submitSearch} className="text-right border text-gray-900 text-sm  block  p-2.5 outline-none">
            <option value="new">جدید ترین</option>
            <option value="cheap">ارزان ترین</option>
            <option value="costly">گران ترین</option>
            <option value="discount">پرتخفیف ترین</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8" >
          {items.map((item: any) => (
            <ProductCardComponent discount={item.discount} key={item._id} color="bg-green-400" title="جدید" {...item} />
          ))}
        </div>
      </div>

    </>)
}
Category.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
