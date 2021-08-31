import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import { AuthAPI } from '../api/auth.api';
import { RegisterAPI } from '../api/register.api';
import { User } from '../types';

type AuthContextType = {
  user?: User;
  setUser: (p: User) => void;
  error?: Record<string, string>;
  isLoading: boolean;
  login: (p: { email: string; password: string }) => Promise<void>;
  logout: (id: string) => Promise<void>;
  register: (p: User) => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<Record<string, string>>();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    AuthAPI.checkUserLogged()
      .then((data) => {
        data.user && setUser(data.user);
        history.push('/');
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  const register = async (payload: User) => {
    await RegisterAPI.register(payload).then((res) => {
      setUser(res);
      history.push('/');
    });
  };

  const login = async (payload: { email: string; password: string }) => {
    await AuthAPI.login(payload).then((data) => {
      data.user && setUser(data.user);
      history.push('/');
    });
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
