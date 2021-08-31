import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import { AuthAPI } from '../api/auth.api';
import { User } from '../types';

type AuthContextType = {
  user?: User;
  setUser: (p: User) => void;
  error?: Record<string, string>;
  isLoading: boolean;
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

  return (
    <AuthContext.Provider value={{ user, setUser, error, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
