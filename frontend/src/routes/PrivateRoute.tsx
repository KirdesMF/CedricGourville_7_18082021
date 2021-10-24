import { Redirect, Route, RouteProps } from 'react-router';
import { useAuth } from '../context/auth.context';

export function PrivateRoute(props: RouteProps) {
  const { user } = useAuth();

  if (!user) return <Redirect to="/login" />;

  return <Route {...props} />;
}
