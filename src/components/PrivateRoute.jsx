import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/stateSelectors';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { token } = useSelector(authSelector);
  return !token ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
