import { lazy, Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Redirect, Route } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";

const Home = lazy(() => import("../pages/Home"));
const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));

const protectedRouterPaths = [

  {
    path: "/register",
    name: 2,
    component: Register,
    exact: false,
    props: {},
  },
  {
    path: "/login",
    name: 3,
    component: Login,
    exact: false,
    props: {},
  },
];

// const routerPaths = [
//   {
//     path: "/",
//     name: 1,
//     component: Home,
//     exact: true,
//     props: {},
//   },
// ];

const Routes = (
  <BrowserRouter>
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        {protectedRouterPaths.map(({ path, name, component, props }) => (
          <ProtectedRoute
            key={name}
            exact
            path={path}
            component={component}
            props={props}
          />
        ))}
        <Route path={"/"} exact component={Home} />
       
      </Suspense>
    </Switch>
  </BrowserRouter>
);

export default Routes;
