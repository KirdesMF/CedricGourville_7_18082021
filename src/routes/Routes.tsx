import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { Page404 } from '../pages/Page404';
import { PublicRoute } from './PublicRoute';
import { AdminRoute } from './AdminRoute';
import { Home } from '../pages/home/Home';
import { Login } from '../pages/login/Login';
import { Register } from '../pages/register/Register';
import { PagePost } from '../pages/PagePost';
import { Feed } from '../pages/feed/Feed';
import { Profil } from '../pages/profil/Profil';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <PublicRoute path="/login" component={Login} />
      <PublicRoute path="/register" component={Register} />
      <PrivateRoute path="/feed" component={Feed} />
      <PrivateRoute path="/profil/:id" component={Profil} />
      <PrivateRoute path="/post/:id" component={PagePost} />
      <AdminRoute path="/dashboard" component={() => <p>Dashboard</p>} />
      <Route component={Page404} />
    </Switch>
  );
}
