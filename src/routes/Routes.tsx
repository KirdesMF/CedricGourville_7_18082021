import { Route, Switch } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <div>Home App</div>
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
