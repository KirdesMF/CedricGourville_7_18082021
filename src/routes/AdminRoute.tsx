import { Redirect, Route, RouteProps } from 'react-router';
import { useUser } from '../api/user.api';

export function AdminRoute(props: RouteProps) {
  const { data: user, isLoading } = useUser();

  if (isLoading) return <p>Loading</p>;
  if (user?.role !== 'ADMIN') return <Redirect to="/login" />;

  return <Route {...props} />;
}
