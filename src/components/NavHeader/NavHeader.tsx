import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth.context';
import { navHeaderStyle } from './nav-header.css';

export function NavHeader() {
  const { user } = useAuth();
  if (!user) {
    return (
      <nav className={navHeaderStyle.container}>
        <Link to="/login">Log in</Link>
        <Link to="/register">Register</Link>
      </nav>
    );
  }

  return <p>Welcome {user.firstName}</p>;
}
