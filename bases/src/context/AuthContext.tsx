import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

enum AuthStatus {
  "checking",
  "authenticated",
  "unauthenticated",
}

interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;
  isChecking: boolean;
}

interface User {
  name: string;
  email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setstatus] = useState(AuthStatus.checking);

  useEffect(() => {
    setTimeout(() => {
      setstatus(AuthStatus.unauthenticated);
    }, 1500);
  }, []);

  return (
    <AuthContext.Provider
      value={{ status, isChecking: status === AuthStatus.checking }}
    >
      {children}
    </AuthContext.Provider>
  );
};
