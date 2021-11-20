import { Redirect, Route, RouteProps } from 'react-router';
import { useCurrentUser } from '../api/user.api';

export function AdminRoute(props: RouteProps) {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) return <p>Loading</p>;
  if (user?.role !== 'ADMIN') return <Redirect to="/login" />;

  return <Route {...props} />;
}
