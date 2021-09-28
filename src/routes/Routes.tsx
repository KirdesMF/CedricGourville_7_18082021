import { Route, Switch } from 'react-router-dom';
import { useAuth } from '../context/auth.context';
import { Feed } from '../pages/Feed';
import { Login } from '../pages/Login';
import { Profil } from '../pages/Profil';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';
import { Loader } from '../modules/Loader';

export function Routes() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <Loader />;

  if (!user) {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path="/">
        <Feed />
      </Route>
      <Route path="/profil">
        <Profil />
      </Route>
    </Switch>
  );
}
