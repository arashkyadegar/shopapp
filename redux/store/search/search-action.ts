import { apiCallBegan } from "../api";

export const searchProductsAction = (name: string, brands: string, priceMin: number, priceMax: number) =>
  apiCallBegan({
    url: `/api/wbproducts/search?name=${name}&brands=${brands}&priceMin=${priceMin}&priceMax=${priceMax}`,
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

