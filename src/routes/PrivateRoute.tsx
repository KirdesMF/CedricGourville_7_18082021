import { Redirect, Route, RouteProps } from 'react-router';
import { useUser } from '../api/user.api';

export function PrivateRoute(props: RouteProps) {
  const { data: user, isSuccess, isLoading } = useUser();

  if (isLoading) return <p>WAIT</p>;

  if (!isSuccess && !user) return <Redirect to="/login" />;

  return <Route {...props} />;
}
