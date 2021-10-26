import { Login, Home, Register } from "../../pages";
import ProductDetail from "../../pages/ProductDetail";
import Account from "../../pages/Account";
import AddProduct from "../../pages/AddProduct";

export const protectedRouterPaths = [
  {
    path: "/",
    component: Home,
    exact: false,
    props: {},
  },
  {
    path: "/login",
    component: Login,
    exact: false,
    props: {},
  },
  {
    path: "/register",
    component: Register,
    exact: false,
    props: {},
  },

];

export const nonProtectedRouterPaths = [
  {
    path: "/",
    component: Home,
    exact: false,
    props: {},
  },
  {
    path: "/productDetail",
    component: ProductDetail,
    exact: false,
    props: {},
  },
  {
    path: "/myAccount",
    component: Account,
    exact: false,
    props: {},
  },
  {
    path: "/addProduct",
    component: AddProduct,
    exact: false,
    props: {},
  },
];
