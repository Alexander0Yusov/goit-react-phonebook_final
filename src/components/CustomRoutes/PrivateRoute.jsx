import { useSelector } from 'react-redux';

const { Route } = require('react-router-dom');

const PrivateRoute = ({ children, ...redirectTo }) => {
  const isLoggedIn = useSelector(state => state.authCombine.user);

  return <Route {...redirectTo}>{isLoggedIn && children}</Route>;
};

export default PrivateRoute;
