import { useAuth } from '../context/auth.context';

export function Feed() {
  const { user } = useAuth();
  return <div>{user?.firstName}</div>;
}
