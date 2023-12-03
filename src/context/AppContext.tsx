import React, {
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { Movies } from "../types/movies";

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
  favoritesMovies: Movies[];
  setFavoritesMovies: React.Dispatch<SetStateAction<Movies[]>>;
  handleSaveMovieFavorite: (movie: Movies) => void;
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
  const [favoritesMovies, setFavoritesMovies] = useState<Movies[]>(
    // Load favorite movies from localStorage at startup
    JSON.parse(localStorage.getItem("favoritesMovies") || "[]")
  );

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

  const handleSaveMovieFavorite = (movie: Movies): void => {
    // Check if the movie is already in favorites
    const isFavorite = favoritesMovies.some((fav) => fav.id === movie.id);

    if (isFavorite) {
      // If it is already in favorites, remove it
      const updatedFavorites = favoritesMovies.filter(
        (fav) => fav.id !== movie.id
      );
      setFavoritesMovies(updatedFavorites);
    } else {
      // If it is not in favorites, add it
      setFavoritesMovies([...favoritesMovies, movie]);
    }
  };

  useEffect(() => {
    // Save favorite movies to localStorage when they change
    localStorage.setItem("favoritesMovies", JSON.stringify(favoritesMovies));
  }, [favoritesMovies]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        selectedTab,
        handleSelectedTab,
        showSidebar,
        setShowSidebar,
        favoritesMovies,
        setFavoritesMovies,
        handleSaveMovieFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
