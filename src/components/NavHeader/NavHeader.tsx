import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth.context';
import { navHeaderStyle } from './nav-header.css';

export function NavHeader() {
  const { user, logout } = useAuth();
  if (!user) {
    return (
      <nav className={navHeaderStyle.container}>
        <Link to="/login">Log in</Link>
        <Link to="/register">Register</Link>
      </nav>
    );
  }

  return (
    <div>
      <p>Welcome {user.firstName}</p>
      <Link to="/profil">Profil</Link>
      <Link to="/">Feed</Link>
      <button onClick={() => logout(user.id)}>Log out</button>
    </div>
  );
}
