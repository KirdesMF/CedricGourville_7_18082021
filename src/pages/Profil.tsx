import { useAuth } from '../context/auth.context';

export function Profil() {
  const { user } = useAuth();
  return (
    <main>
      <div>
        <ul>
          <li>{user?.firstName}</li>
          <li>{user?.lastName}</li>
          <li>{user?.bio}</li>
          <li>{user?.email}</li>
        </ul>
      </div>
    </main>
  );
}
