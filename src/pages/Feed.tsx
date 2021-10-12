import { useAuth } from '../context/auth.context';

export function Feed() {
  const { user, logout } = useAuth();
  return (
    <div>
      <button onClick={() => logout()}>LOG OUT</button>
      <span>{user?.firstName}</span>
    </div>
  );
}
