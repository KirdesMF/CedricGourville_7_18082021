import { Redirect, Route, RouteProps, Switch } from 'react-router-dom';
import { useAuth } from '../context/auth.context';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { wrapper } from '../styles/composition.css';
const headers = new Headers({ 'Content-Type': 'application/json' });

function Feed() {
  const handleOnclick = async (url: string) => {
    const res = await fetch(`http://localhost:1234/${url}`, {
      headers,
      credentials: 'include',
    });
    const json = await res.json();
    console.log(json);
  };
  return (
    <div className={wrapper}>
      <button onClick={() => handleOnclick('setcookie')}>Set</button>
      <button onClick={() => handleOnclick('auth/check')}>Get</button>
    </div>
  );
}

function AuthRoute(props: RouteProps) {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div>Loading ...</div>;
  if (!user) return <Redirect to="/login" />;

  return <Route {...props} component={Feed} />;
}
export function Routes() {
  return (
    <Switch>
      <AuthRoute exact path="/" />
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
    </Switch>
  );
}
