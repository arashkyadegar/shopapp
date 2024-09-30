import { ReactElement } from "react";
import MainLayout from "./main-layout";
import LabelComponent from "@/components/shared/label";
import LgSubmitbtnComponent from "@/components/shared/btn/lg-submit-btn";
import CategoryCardComponent from "@/components/category-card/category-card";
// This gets called on every request
export async function getServerSideProps() {


  const baseURL = process.env.NEXT_PUBLIC_BASEURL;
  // const res = await fetch(`${baseURL}/api/wbproducts`);
  // const repo = await res.json();
  // const products = JSON.stringify(repo);

  // const res_settings = await fetch(`${baseURL}/api/wbsettings/1`);
  // const repo_settings = await res_settings.json();
  // const settings = JSON.stringify(repo_settings);

  const res_categories = await fetch(`${baseURL}/api/wbcategories`);
  const repo_categories = await res_categories.json();
  const categories = JSON.stringify(repo_categories);

  const res_brands = await fetch(`${baseURL}/api/wbbrands`);
  const repo_brands = await res_brands.json();
  const brands = JSON.stringify(repo_brands);

  return { props: { categories, brands } };
}
export default function Search(props: any) {
  const categories = JSON.parse(props.categories);
  const brands = JSON.parse(props.brands);
  return (
    <>
      <div className="flex w-full flex-col sm:flex-row justify-between container  p-4 gap-2">
        <div className="flex w-full sm:w-1/4 flex-col sm:flex-row justify-between container  p-4 gap-2">
          <div className="w-full flex flex-col border rounded-lg p-4  text-sm">
            <div className="flex flex-row justify-between">
              <div >
                <h1 className="mb-2 text-lg">
                  فیلترها
                </h1>

              </div>
              <button className="text-red-600 mb-2 ">
                حذف فیلترها
              </button>
            </div>

            <div className="mb-4">
              <LabelComponent title="نام کالا" name="productname" />
              <div className=" flex flex-col gap-2 justify-end  bg-white   text-gray-900 text-sm rounded-lg  px-1">
                <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                  <input type="text"
                    name="name"
                    id="name"
                    className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                </div>
                {/* <ErrComponent text={productFormState.data.categoryIdErr} /> */}
              </div>
            </div>
            <div className="mb-4">
              <LabelComponent title="زیر مجموعه اصلی" name="CategoryId" required="true" />
              <div className=" flex flex-col gap-2 justify-end  bg-white   text-gray-900 text-sm rounded-lg  px-1">
                {categories.map((item: any) => (
                  <div className="flex flex-row gap-2">
                    <input type="checkbox" key={item._id} value={item._id} />
                    <LabelComponent title={item.name} name="CategoryId" />
                  </div>
                ))}
              </div>
              {/* <ErrComponent text={productFormState.data.categoryIdErr} /> */}
            </div>
            <div className="mb-4">
              <LabelComponent title="قیمت از" name="productname" />
              <div className=" flex flex-col gap-2 justify-end  bg-white   text-gray-900 text-sm rounded-lg  px-1">
                <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                  <input type="range" name="" id="" defaultValue={0} className="w-full" />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <LabelComponent title="قیمت تا" name="productname" />
              <div className=" flex flex-col gap-2 justify-end  bg-white   text-gray-900 text-sm rounded-lg  px-1">
                <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                  <input type="range" name="" id="" defaultValue={100} className="w-full" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-end">
              <LgSubmitbtnComponent title="جستجو" >
              </LgSubmitbtnComponent>
            </div>
          </div>
        </div>
        <div className="flex w-full  sm:w-3/4  flex-col sm:flex-row justify-between container  p-4 gap-2">
          <div className="grid grid-cols-2  gap-8" >
            {categories.map((item: any) => (
              <CategoryCardComponent key={item._id}  {...item} />
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
