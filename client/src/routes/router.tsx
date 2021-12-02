import { Navigate, Route, Routes } from 'react-router';
import { Loading } from '@app/components/Loading/Loading';
import { useCurrentUser } from '@app/api/user.api';
import { Home } from '@app/pages/home/Home';
import { Login } from '@app/pages/login/Login';
import { Page404 } from '@app/pages/Page404';
import { AllPosts } from '@app/pages/posts/AllPosts';
import { Register } from '@app/pages/register/Register';
import { UserProfile } from '@app/pages/users/UserProfile';
import { PostDetails } from '@app/pages/posts/PostDetails';
import { Dashboard } from '@app/pages/admin/Dashboard';

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
  return data && data.role === 'ADMIN' ? children : <Navigate to="/posts" />;
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
              <PostDetails />
            </RequiredAuth>
          }
        />
      </Route>

      {/** users */}
      <Route
        path="/users/:userId"
        element={
          <RequiredAuth>
            <UserProfile />
          </RequiredAuth>
        }
      />

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
