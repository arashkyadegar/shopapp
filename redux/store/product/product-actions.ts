import { apiCallBegan } from "../api";

export const getCategoryAction = (id: any) =>
  apiCallBegan({
    url: "/categories/" + id,
    onSuccess: "categoryForm/categoryFormFetched",
    onError: "categoryForm/categoryFormFaild",
    method: "GET",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getProductsAction = (sort: string) =>
  apiCallBegan({
    url: `/api/wbproducts?sortby=${sort}`,
    onSuccess: "products/productsFetched",
    onError: "products/productsLoadingStoped",
    onStart: "products/productsRequested",
    method: "GET",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });


export const searchCategoriesAction = (name: string) =>
  apiCallBegan({
    url: `/categories/search?name=${name}`,
    onSuccess: "categories/categoriesFetched",
    onError: "categories/categoriesLoadingStoped",
    onStart: "categories/categoriesRequested",
    method: "GET",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });

