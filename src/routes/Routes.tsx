import { Route, Switch } from 'react-router-dom';
import { useAuth } from '../context/auth.context';
import { Feed } from '../pages/Feed';
import { Login } from '../pages/Login';
import { Profil } from '../pages/Profil';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';
import { Loader } from '../modules/Loader';
import { PrivateRoute } from './PrivateRoute';

// TODO
// improve Protected routes

export function Routes() {
  const { isLoading } = useAuth();

  if (isLoading) return <Loader />;

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/feed" component={Feed} />
      <PrivateRoute path="/profil" component={Profil} />
    </Switch>
  );
}
