import React, { Suspense, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {
  nonProtectedRouterPaths,
  protectedRouterPaths,
} from "./constants/routes/routes";
import * as localStorageService from "./services/localStorageService";
import { useDispatch, useSelector } from "react-redux";
import { signInSuccess } from "./store/actions/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getGivenOffers, getReceivedOffers } from "./services/accountService";
import {
  setGivenOffers,
  setReceivedOffers,
} from "./store/actions/accountAction";
const App = () => {
  let token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  let localStorageToken = localStorageService.getToken();
  let localStorageUser = localStorageService.getUser();

  useEffect(() => {
    if (localStorageToken) {
      dispatch(signInSuccess(localStorageToken));
    }
    if (localStorageUser) {
      dispatch(signInSuccess(localStorageUser));
    }
  }, [dispatch, localStorageToken, localStorageUser]);
  useEffect(() => {
    if (token) {
      getGivenOffers().then((res) => {
        dispatch(setGivenOffers(res.data));
      });
      getReceivedOffers().then((res) => {
        dispatch(setReceivedOffers(res.data));
      });
    }
  }, [dispatch, token]);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            {nonProtectedRouterPaths.map(
              ({ path, name, component: Component }) => (
                <Route
                  key={name}
                  path={path}
                  exact
                  component={() =>
                    !token ? <Redirect to="/login" /> : <Component />
                  }
                />
              )
            )}
            {protectedRouterPaths.map(
              ({ name, path, component: Component }) => {
                return (
                  <Route
                    key={name}
                    path={path}
                    exact
                    component={() =>
                      token ? <Redirect to="/" /> : <Component />
                    }
                  />
                );
              }
            )}
          </Suspense>
        </Switch>
      </BrowserRouter>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default App;
