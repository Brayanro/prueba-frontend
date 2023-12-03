import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext, AppContextType } from "../context/AppContext";
import { Card } from "./Card";
import { SearchInput } from "./SearchInput";

export const Favorites = () => {
  const { favoritesMovies, handleSaveMovieFavorite } = useContext(
    AppContext
  ) as AppContextType;
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredMovies = favoritesMovies.filter(({ title }) => {
    return title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <section className="mx-6 md:mx-16 pb-14 mt-[520px] lg:mt-[480px] 2xl:h-screen">
      <h2 className="text-white text-2xl font-bold">
        Favorites ({filteredMovies.length})
      </h2>
      <SearchInput searchTerm={searchTerm} handleSearch={setSearchTerm} />
      {filteredMovies.length > 0 ? (
        <div className="grid gap-6 mt-6 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {filteredMovies.map((movie) => (
            <Card
              poster={
                movie.poster_path === null
                  ? null
                  : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              }
              title={movie.title}
              key={movie.id}
              isFavorite={favoritesMovies.some((fav) => fav.id === movie.id)}
              handleSaveMovieFavorite={() => handleSaveMovieFavorite(movie)}
              handleSeeMoreDetails={() => navigate(`/movie/${movie.id}`)}
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
