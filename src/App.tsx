import { Switch, Route, Link } from 'react-router-dom';
import { Header } from './modules/Header';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <div>Home App</div>
          <nav>
            <Link to="/login">Log in Here Please </Link>
            <Link to="/register">Sign in</Link>
          </nav>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </>
  );
}

export default App;
