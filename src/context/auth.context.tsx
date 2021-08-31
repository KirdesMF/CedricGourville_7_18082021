import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AuthAPI } from '../api/auth.api';
import { RegisterAPI } from '../api/register.api';
import { User } from '../types';

type AuthContextType = {
  user?: User;
  setUser: (p: User) => void;
  error?: Record<string, string> | null;
  isLoading: boolean;
  login: (payload: { email: string; password: string }) => Promise<void>;
  logout: (id: string) => Promise<void>;
  register: (payload: User) => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<Record<string, string> | null>();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    AuthAPI.checkUserLogged()
      .then((data) => {
        data.user && setUser(data.user);
        history.push(pathname);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setError(null);
  }, [pathname]);

  const register = async (payload: User) => {
    await RegisterAPI.register(payload)
      .then((data) => {
        data.user && setUser(data.user);
        history.push('/');
      })
      .catch((err) => setError(err));
  };

  const login = async (payload: { email: string; password: string }) => {
    await AuthAPI.login(payload)
      .then((data) => {
        data.user && setUser(data.user);
        history.push('/');
      })
      .catch((err) => setError(err));
  };

  const logout = async (id: string) => {
    await AuthAPI.logout(id).then(() => {
      history.push('/login');
      setUser(undefined);
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, error, isLoading, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
