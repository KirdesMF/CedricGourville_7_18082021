import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/login">Log in Here Please </Link>
        <Link to="/register">Sign in</Link>
      </nav>
    </header>
  );
}
