import { combineReducers } from "redux";
import categoriesReducer from "./category/categories";


export default combineReducers({
  categories: categoriesReducer,
});
