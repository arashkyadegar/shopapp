import { ReactElement, useEffect } from "react";
import MainLayout from "./main-layout";
import LabelComponent from "@/components/shared/label";
import LgSubmitbtnComponent from "@/components/shared/btn/lg-submit-btn";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { searchFormCleared, searchFormFilled } from "@/redux/store/search/search-form";
import { searchProductsAction } from "@/redux/store/search/search-action";
import CategoryCardComponent from "@/components/category-card/category-card";
import ProductCardComponent from "@/components/product-card.tsx/product-card";
import Loading from "@/components/shared/loading";
import { useSearchParams } from "next/navigation";
import { productsFetched } from "@/redux/store/product/products";
// This gets called on every request
export async function getServerSideProps(context: any) {
  const { name } = context.query;
  const baseURL = process.env.NEXT_PUBLIC_BASEURL;
  const res = await fetch(`${baseURL}/api/wbproducts/search?name=${name}`);
  const repo = await res.json();
  const products = JSON.stringify(repo);

  // const res_settings = await fetch(`${baseURL}/api/wbsettings/1`);
  // const repo_settings = await res_settings.json();
  // const settings = JSON.stringify(repo_settings);

  const res_categories = await fetch(`${baseURL}/api/wbcategories`);
  const repo_categories = await res_categories.json();
  const categories = JSON.stringify(repo_categories);

  const res_brands = await fetch(`${baseURL}/api/wbbrands`);
  const repo_brands = await res_brands.json();
  const brands = JSON.stringify(repo_brands);

  return { props: { categories, brands, products } };
}
export default function Search(props: any) {
  const categories = JSON.parse(props.categories);
  const products = JSON.parse(props.products);
  const productsState = useAppSelector((state) => state.entities.products);
  const brands = JSON.parse(props.brands);
  const dispatch = useAppDispatch();
  const searchFormState = useAppSelector((state) => state.entities.searchForm);
  const searchParams = useSearchParams()

  const search_name = searchParams.get('name')
  useEffect(() => {
    dispatch(productsFetched(products))
    dispatch(searchFormCleared());
  }, []);

  function fillSearchPriceMax(event: any) {
    const text = event.target.value;
    dispatch(
      searchFormFilled({
        ...searchFormState.data,
        priceMax: text
      }))
  }
  function fillSearchPriceMin(event: any) {
    const text = event.target.value;
    dispatch(
      searchFormFilled({
        ...searchFormState.data,
        priceMin: text
      }))
  }

  function selectSearchBrand(event: any) {
    const checked = event.target.checked;
    const value = event.target.value;
    if (checked) {
      dispatch(
        searchFormFilled({
          ...searchFormState.data,
          brands: [...searchFormState.data.brands, value]
        }))
    } else {
      const newArray = searchFormState.data.brands.filter((item: string) => item != value)
      dispatch(
        searchFormFilled({
          ...searchFormState.data,
          brands: newArray
        }))
    }

  }

  function searchSubmit(event: any) {
    const brands = searchFormState.data.brands.toString();
    const priceMin = searchFormState.data.priceMin;
    const priceMax = searchFormState.data.priceMax;
    dispatch(searchProductsAction(search_name, brands, priceMin, priceMax))
  }

  function searchClearFiters(event: any): void {
    dispatch(searchFormCleared());
  }

  return (
    <>
      {/* extera border for mobile-navbar */}
      <div className="border-t border-black md:hidden"></div>
      <div className="flex w-full flex-col sm:flex-row justify-between container  p-4 gap-2">
        <div className="flex w-full sm:w-1/4 flex-col sm:flex-row justify-between container  p-4 gap-2">
          <div className="w-full flex flex-col border rounded-lg p-4  text-sm">
            {productsState.isLoading && (
              <Loading />
            )}
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="mb-2 text-lg">
                  فیلترها
                </h1>

              </div>
              <button className="text-red-600 mb-2 " onClick={searchClearFiters}>
                حذف فیلترها
              </button>
            </div>

            {/* <div className="mb-4">
              <LabelComponent title="نام کالا" name="productname" />
              <div className=" flex flex-col gap-2 justify-end  bg-white   text-gray-900 text-sm rounded-lg  px-1">
                <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                  <input type="text"
                    name="name"
                    id="name"
                    className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                </div>
         
              </div>
            </div> */}
            <div className="mb-4">
              <LabelComponent title="زیر مجموعه اصلی" name="CategoryId" />
              <div className=" flex flex-col justify-end  bg-white pt-3  text-gray-900 text-sm rounded-lg  px-1">
                {categories.map((item: any) => (
                  <div className="flex flex-row gap-1" key={item._id}>
                    <input type="checkbox" key={item._id} value={item._id} onChange={selectSearchBrand} />
                    <LabelComponent title={item.name} name="CategoryId" />
                  </div>
                ))}
              </div>
              {/* <ErrComponent text={productFormState.data.categoryIdErr} /> */}
            </div>
            <div className="mb-4">
              <LabelComponent title="قیمت از" name="productname" /> {searchFormState.data.priceMin}
              <div className=" flex flex-col gap-2 justify-end  bg-white   text-gray-900 text-sm rounded-lg  px-1">
                <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                  <input type="range" name="" id="" defaultValue={searchFormState.data.priceMin} step={5000} min={0} max={1000000} className="w-full" onMouseUp={fillSearchPriceMin} />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <LabelComponent title="قیمت تا" name="productname" /> {searchFormState.data.priceMax}
              <div className=" flex flex-col gap-2 justify-end  bg-white   text-gray-900 text-sm rounded-lg  px-1">
                <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                  <input type="range" name="" id=""  onMouseUp={fillSearchPriceMax} defaultValue={searchFormState.data.priceMax} step={5000} min={0} max={1000000} className="w-full" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-end">
              <LgSubmitbtnComponent title="جستجو" onClickFunc={searchSubmit} >
              </LgSubmitbtnComponent>
            </div>
          </div>
        </div>
        <div className="flex w-full  sm:w-3/4  flex-col sm:flex-row justify-between container  p-4 gap-2">
          <div className="grid grid-cols-2  gap-8" >
            {productsState.list.map((item: any) => (
              <ProductCardComponent key={item._id}  {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

Search.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
