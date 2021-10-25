import { Redirect, Route, RouteProps } from 'react-router';
import { useUser } from '../api/user.api';

export function PublicRoute(props: RouteProps) {
  const { data: user, isSuccess } = useUser();

  if (user && isSuccess) return <Redirect to="/feed" />;

  return <Route {...props} />;
}
