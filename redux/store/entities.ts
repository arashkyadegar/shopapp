import { combineReducers } from "redux";
import categoriesReducer from "./category/categories";
import productsReducer from "./product/products";
import searchFormReducer from "./search/search-form";


export default combineReducers({
  products: productsReducer,
  searchForm: searchFormReducer,
  categories: categoriesReducer
});
