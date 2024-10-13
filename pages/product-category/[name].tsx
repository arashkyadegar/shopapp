import { ReactElement, useEffect } from "react";
import MainLayout from "../main-layout";
import ProductCardComponent from "@/components/product-card.tsx/product-card";
import router, { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { getProductsAction } from "@/redux/store/product/product-actions";
import Loading from "@/components/shared/loading";
import { turnToFa } from "@/utility/regex";
export async function getServerSideProps(context: any) {
  const { name } = context.params;
  const { sortby } = context.query;
  const { page } = context.query;
  // const baseURL = process.env.NEXT_PUBLIC_BASEURL;
  // const res = await fetch(`${baseURL}/api/wbproducts?category=${name}&sortby=${sortby}`);
  // const repo = await res.json();
  // const products = JSON.stringify(repo);
  console.log(`${name} --- ${sortby} ---${page}`)
  return { props: { name } };
}

export default function Category({ name }: any) {

  let totalSortQuesry = "";
  const dispatch = useAppDispatch();
  const productsState = useAppSelector((state) => state.entities.products);
  useEffect(() => {
    dispatch(getProductsAction(name, 1, 'new'));
  }, []);


  function submitSearch(event: any): void {
    const text = event.target.value;
    totalSortQuesry = text;
    dispatch(getProductsAction(name, 1, text));
  }

  function nextpage(event: any): void {
    let node = event.target as HTMLInputElement;
    let page = parseInt(node.getAttribute('id'));
    dispatch(getProductsAction(name, page, totalSortQuesry));
  }

  return (
    <>
      {/* extera border for mobile-navbar */}
      <div className="border-t border-black md:hidden"></div>
      <div className="flex flex-col p-10  gap-4">
        {productsState.isLoading && (
          <Loading />
        )}
        <div className="flex flex-row  justify-between  items-center">
          <div className="flex flex-row  gap-2 justify-between  items-center">
            <label htmlFor="">نمایش بر اساس :</label>
            <select id="countries" onChange={submitSearch} className="text-right border text-gray-900 text-sm  block  p-2.5 outline-none">
              <option value="new">جدید ترین</option>
              <option value="cheap">ارزان ترین</option>
              <option value="costly">گران ترین</option>
              <option value="discount">پرتخفیف ترین</option>
            </select>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8" >
          {productsState.list.map((item: any) => (
            <ProductCardComponent discount={item.discount} key={item._id} color="bg-green-400" title="جدید" {...item} />
          ))}
        </div>
        <div className="flex flex-row-reverse justify-center gap-2 p-2">
          <>
            {(() => {
              const arr = [];
              for (let i = 1; i <= (Math.ceil(productsState.totalCount / 10)); i++) {
                if (i === productsState.page) {
                  arr.push(
                    <div className="flex items-center text-xs justify-center w-6 h-6 bg-gray-100 text-gray-500 rounded-md">
                      <a>{turnToFa(i.toString())}</a>
                    </div>
                  );
                } else {
                  arr.push(
                    <button id={i.toString()} onClick={nextpage} className="flex items-center text-xs justify-center w-6 h-6 bg-teal-600 text-white rounded-md">
                      {turnToFa(i.toString())}
                    </button>
                  );
                }
              }
              return arr;
            })()}
          </>
        </div>
      </div>

    </>)
}
Category.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
