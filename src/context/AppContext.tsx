import React, {
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface User {
  email: string;
}

export type AppContextType = {
  user: User;
  setUser: React.Dispatch<SetStateAction<User>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType | null>(null);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User>({ email: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("saveUser");

    if (storedToken) {
      setIsAuthenticated(true);
    }

    if (storedUser) {
      setUser({ email: storedUser });
    }
  }, []);

  console.log(user);

  return (
    <AppContext.Provider
      value={{ user, setUser, setIsAuthenticated, isAuthenticated }}
    >
      {children}
    </AppContext.Provider>
  );
};
