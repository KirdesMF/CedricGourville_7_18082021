import {
  // Redirect,
  Route,
  // RouteProps,
  Switch,
} from 'react-router-dom';
import { useAuth } from '../context/auth.context';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { wrapper } from '../styles/composition.css';

function Feed() {
  return <div className={wrapper}>WELCOME FEED PAGE</div>;
}

function Loading() {
  return <div className={wrapper}>LOADING ...</div>;
}

function Profil() {
  return <div className={wrapper}>PROFIL PAGE</div>;
}

// function AuthRoute(props: RouteProps) {
//   const { user, isLoading } = useAuth();

//   if (isLoading) return <Loading />;
//   if (!user) return <Redirect to="/login" />;

//   return <Route {...props} component={Feed} />;
// }
export function Routes() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <Loading />;

  if (!user) {
    return (
      <Switch>
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
