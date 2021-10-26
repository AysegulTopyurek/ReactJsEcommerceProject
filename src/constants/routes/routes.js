import { Login, Home, Register } from "../../pages";
import ProductDetail from "../../pages/ProductDetail";
import Account from "../../pages/Account";
import AddProduct from "../../pages/AddProduct";

export const protectedRouterPaths = [
  {
    path: "/login",
    name: 3,
    component: Login,
    exact: false,
    props: {},
  },
  {
    path: "/register",
    name: 2,
    component: Register,
    exact: false,
    props: {},
  },
];

export const nonProtectedRouterPaths = [
  {
    path: "/",
    name: 3,
    component: Home,
    exact: false,
    props: {},
  },
  {
    path: "/productDetail",
    name: 4,
    component: ProductDetail,
    exact: false,
    props: {},
  },
  {
    path: "/myAccount",
    name: 5,
    component: Account,
    exact: false,
    props: {},
  },
  {
    path: "/addProduct",
    name: 5,
    component: AddProduct,
    exact: false,
    props: {},
  },
];
