import { useEffect, useState } from "react";
import { movieService } from "../services/moviesService";
import { Movies } from "../types/movies";

interface UseCategoriesResult {
  movies: Movies[];
  setMovies: React.Dispatch<React.SetStateAction<Movies[]>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const useCategories = (fetchUrl: string): UseCategoriesResult => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await movieService({ fetchUrl });
        setMovies(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fetchUrl]);

  return { movies, searchTerm, setSearchTerm, loading, setMovies, setLoading };
};

export default useCategories;
