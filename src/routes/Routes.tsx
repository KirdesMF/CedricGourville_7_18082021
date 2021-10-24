import { Route, Switch } from 'react-router-dom';
import { Feed } from '../pages/Feed';
import { Login } from '../pages/Login';
import { Profil } from '../pages/Profil';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';
import { PrivateRoute } from './PrivateRoute';
import { Page404 } from '../pages/Page404';

// TODO
// improve Protected routes

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/feed" component={Feed} />
      <PrivateRoute path="/profil" component={Profil} />
      <Route component={Page404} />
    </Switch>
  );
}
