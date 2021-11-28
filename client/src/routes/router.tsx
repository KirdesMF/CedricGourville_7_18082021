import { Navigate, Route, Routes } from 'react-router';
import { Loading } from '../components/Loading/Loading';
import { useCurrentUser } from '../api/user.api';
import { Dashboard } from '../pages/Dashboard';
import { Home } from '../pages/home/Home';
import { Login } from '../pages/login/Login';
import { Page404 } from '../pages/Page404';
import { PagePost } from '../pages/PagePost';
import { AllPosts } from '../pages/posts/AllPosts';
import { Register } from '../pages/register/Register';
import { UserProfile } from '../pages/users/UserProfile';
import { Users } from '../pages/users/Users';

type RequiredAuthProps = {
  children: JSX.Element;
};

function RequiredAuth({ children }: RequiredAuthProps) {
  const { data, isLoading } = useCurrentUser();

  if (isLoading) return <Loading />;

  return data ? children : <Navigate to="/login" />;
}

function RequiredAdminAuth({ children }: RequiredAuthProps) {
  const { data, isLoading } = useCurrentUser();

  if (isLoading) return <Loading />;

  return data && data.role ? children : <Navigate to="/posts" />;
}

export function AppRouter() {
  return (
    <Routes>
      {/** public */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Page404 />} />

      {/** posts */}
      <Route path="/posts">
        <Route
          index
          element={
            <RequiredAuth>
              <AllPosts />
            </RequiredAuth>
          }
        />
        <Route
          path=":postId"
          element={
            <RequiredAuth>
              <PagePost />
            </RequiredAuth>
          }
        />
      </Route>

      {/** users */}
      <Route path="/users">
        <Route
          index
          element={
            <RequiredAuth>
              <Users />
            </RequiredAuth>
          }
        />
        <Route
          path=":userId"
          element={
            <RequiredAuth>
              <UserProfile />
            </RequiredAuth>
          }
        />
      </Route>

      {/** admin */}
      <Route
        path="/admin"
        element={
          <RequiredAdminAuth>
            <Dashboard />
          </RequiredAdminAuth>
        }
      />
    </Routes>
  );
}
