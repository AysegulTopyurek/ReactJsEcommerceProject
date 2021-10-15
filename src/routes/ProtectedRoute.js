import { Redirect, Route, withRouter } from 'react-router-dom';

const protectedRouteConditions = ['/login', '/register'];
const isProtectedRoute = (path) => protectedRouteConditions.includes(path);

const ProtectedRoute = ({ component: Component, ...rest }) => {
  if (isProtectedRoute(rest.path)) {
    return <Route {...rest} component={Component} />;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('user') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: rest.location } }}
          />
        )
      }
    />
  );
};


ProtectedRoute.defaultProps = {};

export default withRouter(ProtectedRoute);