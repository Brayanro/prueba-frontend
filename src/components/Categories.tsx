import { useEffect, useState } from "react";
import { movieService } from "../services/moviesService";
import { Movies } from "../types/movies";
import { Card } from "./Card";

interface CategoriesProps {
  categoryName: string;
  fetchUrl: string;
}

export const Categories: React.FC<CategoriesProps> = ({
  fetchUrl,
  categoryName,
}) => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [originalMovies, setOriginalMovies] = useState<Movies[]>([]);
  const [favoritesMovies, setFavoritesMovies] = useState<Movies[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await movieService({ fetchUrl });
        setMovies(response);
        setOriginalMovies(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fetchUrl]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    const sourceData = term === "" ? originalMovies : movies;

    const filteredData = sourceData.filter(({ title }) =>
      title.toLowerCase().includes(term.toLowerCase())
    );

    setMovies(filteredData);
  };

  const placeholderElements = new Array(20).fill(null);

  const handleSaveMovieFavorite = (movie: Movies) => {
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

  return (
    <section className="mx-6 md:mx-16 pb-14 mt-[520px] lg:mt-[480px] 2xl:h-screen">
      <h2 className="text-white text-2xl font-bold">
        {categoryName} ({movies.length})
      </h2>
      <div className="relative mt-5">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-[#5bb0ca]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-[270px] md:w-[300px] outline-none p-3 ps-10 text-sm rounded-lg bg-white"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {loading ? (
        <div className="grid gap-6 mt-6 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {placeholderElements.map((_, index) => (
            <article
              key={index}
              className="w-[280px] h-[158px] rounded-2xl animate-pulse bg-gray-200"
            />
          ))}
        </div>
      ) : movies.length > 0 ? (
        <div className="grid gap-6 mt-6 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {movies.map((movie) => (
            <Card
              backdrop={
                movie.backdrop_path === null
                  ? "https://farm5.staticflickr.com/4363/36346283311_74018f6e7d_o.png"
                  : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
              }
              title={movie.title}
              key={movie.id}
              isFavorite={favoritesMovies.some((fav) => fav.id === movie.id)}
              handleSaveMovieFavorite={() => handleSaveMovieFavorite(movie)}
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-[200px] flex items-center justify-center">
          <p className="text-white text-2xl font-semibold">No results found</p>
        </div>
      )}
    </section>
  );
};
