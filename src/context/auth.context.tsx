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
  login: (payload: { log: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  register: (payload: User) => Promise<void>;
  checkUniqueValue: (
    value: 'username' | 'email',
    payload: string
  ) => Promise<boolean | void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<Record<string, string> | null>();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const { pathname } = useLocation();

  // TODO
  // need to be improve
  // actually error message is displayed all time
  useEffect(() => {
    AuthAPI.checkUserLogged()
      .then((data) => {
        setUser(data.user);
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
        setUser(data.user);
        history.push('/feed');
      })
      .catch((err) => setError(err));
  };

  const checkUniqueValue = async (
    value: 'username' | 'email',
    payload: string
  ) => {
    return await RegisterAPI.checkUniqueValue(value, payload)
      .then((res) => {
        setError(null);
        return res.ok;
      })
      .catch((err) => setError(err));
  };

  const login = async (payload: { log: string; password: string }) => {
    await AuthAPI.login(payload)
      .then((data) => {
        setUser(data.user);
        history.push('/feed');
      })
      .catch((err) => setError(err));
  };

  const logout = async () => {
    await AuthAPI.logout().then(() => {
      history.push('/login');
      setUser(undefined);
    });
  };

  const values = {
    user,
    setUser,
    error,
    isLoading,
    login,
    logout,
    register,
    checkUniqueValue,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
