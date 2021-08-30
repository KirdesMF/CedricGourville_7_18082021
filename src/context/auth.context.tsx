import { createContext, ReactNode, useContext } from 'react';

const AuthContext = createContext({});

export function AuthProvider({ children }: { children: ReactNode }) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
