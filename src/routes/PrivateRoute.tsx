import { Redirect, Route, RouteProps } from 'react-router';
import { useUser } from '../api/user.api';

export function PrivateRoute(props: RouteProps) {
  const { isLoading, isError } = useUser();

  if (isLoading) return <p>WAIT</p>;

  if (isError) return <Redirect to="/login" />;

  return <Route {...props} />;
}
