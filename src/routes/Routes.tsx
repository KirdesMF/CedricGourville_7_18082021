import { Route, Switch } from 'react-router-dom';
import { Feed } from '../pages/Feed';
import { Login } from '../pages/Login';
import { Profil } from '../pages/Profil';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';
import { PrivateRoute } from './PrivateRoute';
import { Page404 } from '../pages/Page404';
import { PublicRoute } from './PublicRoute';
import { AdminRoute } from './AdminRoute';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <PublicRoute path="/login" component={Login} />
      <PublicRoute path="/register" component={Register} />
      <PrivateRoute path="/feed" component={Feed} />
      <PrivateRoute path="/profil" component={Profil} />
      <AdminRoute path="/dashboard" component={() => <p>Dashboard</p>} />
      <Route component={Page404} />
    </Switch>
  );
}
