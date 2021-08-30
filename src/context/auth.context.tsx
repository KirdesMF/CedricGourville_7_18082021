import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { AuthAPI } from '../api/auth.api';
import { User } from '../types';

type AuthContextType = {
  user?: User;
  error?: Record<string, string>;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<Record<string, string>>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AuthAPI.checkUserLogged()
      .then((user) => setUser(user))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);
  console.log(error?.error);
  console.log(isLoading);

  return (
    <AuthContext.Provider value={{ user, error, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
