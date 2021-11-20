import { Redirect, Route, RouteProps } from 'react-router';
import { useCurrentUser } from '../api/user.api';

export function PublicRoute(props: RouteProps) {
  const { data: user, isSuccess } = useCurrentUser();

  if (user && isSuccess) return <Redirect to="/feed" />;

  return <Route {...props} />;
}
