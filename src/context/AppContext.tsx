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
  selectedTab: string;
  handleSelectedTab: (tab: string) => void;
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType | null>(null);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User>({ email: "" });
  const [selectedTab, setSelectedTab] = useState("Popular");
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("saveUser");

    if (storedUser) {
      setUser({ email: storedUser });
    }
  }, []);

  const handleSelectedTab = (tab: string): void => {
    setSelectedTab(tab);
    setShowSidebar(false);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        selectedTab,
        handleSelectedTab,
        showSidebar,
        setShowSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
