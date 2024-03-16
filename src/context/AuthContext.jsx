import { createContext, useContext } from 'react';

const AuthContex = createContext();

function AuthProvider({ children }) {
  return <AuthContex.Provider value={{}}>{children}</AuthContex.Provider>;
}

function useAuth() {
  const context = useContext(AuthContex);
  if (!context)
    throw new Error('Auth provider uses where that is not provided');
  return context;
}

export { AuthProvider, useAuth };
