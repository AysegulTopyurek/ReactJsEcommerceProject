import { combineReducers } from "redux";
import productReducer from "./reducers/productReducer";
import categoryReducer from "./reducers/categoryReducer";
import authReducer from "./reducers/authReducer";
import shopReducer from "./reducers/shopReducer";
import accountReducer from "./reducers/accountReducer";

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  auth: authReducer,
  shop: shopReducer,
  account: accountReducer,
});

export default rootReducer;
