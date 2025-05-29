// AuthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define types
interface User {
  email: string;
  userType: "admin" | "artesao" | "cliente";
  loginTime: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, userType?: "admin" | "artesao" | "cliente") => void;
  logout: () => void;
  getUserType: () => "admin" | "artesao" | "cliente" | null;
  determineUserType: (email: string) => "admin" | "artesao" | "cliente";
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  // Load auth state from sessionStorage on mount
  useEffect(() => {
    const savedAuthState = sessionStorage.getItem("isAuthenticated");
    const savedUser = sessionStorage.getItem("user");

    if (savedAuthState === "true" && savedUser) {
      try {
        const parsedUser: User = JSON.parse(savedUser);
        setIsAuthenticated(true);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing saved user data:", error);
        // Clear invalid data
        sessionStorage.removeItem("isAuthenticated");
        sessionStorage.removeItem("user");
      }
    }
  }, []);

  const login = (
    email: string,
    userType: "admin" | "artesao" | "cliente" = "cliente"
  ): void => {
    const userData: User = {
      email,
      userType,
      loginTime: new Date().toISOString(),
    };

    setIsAuthenticated(true);
    setUser(userData);

    // Persist to sessionStorage
    sessionStorage.setItem("isAuthenticated", "true");
    sessionStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = (): void => {
    setIsAuthenticated(false);
    setUser(null);

    // Clear sessionStorage
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("user");
  };

  const getUserType = (): "admin" | "artesao" | "cliente" | null => {
    return user ? user.userType : null;
  };

  const determineUserType = (
    email: string
  ): "admin" | "artesao" | "cliente" => {
    const adminPattern = /@admin\./i;
    const artesaoPattern = /@artesao\./i;
    const clientePattern = /@cliente\./i;

    if (adminPattern.test(email)) {
      return "admin";
    } else if (artesaoPattern.test(email)) {
      return "artesao";
    } else if (clientePattern.test(email)) {
      return "cliente";
    } else {
      return "cliente"; // default
    }
  };

  const value: AuthContextType = {
    isAuthenticated,
    user,
    login,
    logout,
    getUserType,
    determineUserType,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

