import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext, AppContextType } from "../context/AppContext";
import useCategories from "../hooks/useCategories";
import { Card } from "./Card";
import { SearchInput } from "./SearchInput";

interface CategoriesProps {
  categoryName: string;
  fetchUrl: string;
}

export const Categories: React.FC<CategoriesProps> = ({
  fetchUrl,
  categoryName,
}) => {
  const { movies, loading, searchTerm, setSearchTerm } =
    useCategories(fetchUrl);
  const { favoritesMovies, handleSaveMovieFavorite } = useContext(
    AppContext
  ) as AppContextType;
  const navigate = useNavigate();

  const filteredMovies = movies.filter(({ title }) => {
    return title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const skeletonElements = new Array(20).fill(null);

  return (
    <section className="mx-6 md:mx-16 pb-14 mt-[520px] lg:mt-[480px] 2xl:h-full">
      <h2 className="text-white text-2xl font-bold">
        {categoryName} ({filteredMovies.length})
      </h2>
      <SearchInput searchTerm={searchTerm} handleSearch={setSearchTerm} />
      {loading ? (
        <div className="grid gap-6 mt-6 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {skeletonElements.map((_, index) => (
            <article
              key={index}
              className="w-[271px] h-[406px] rounded-2xl animate-pulse bg-gray-200"
            />
          ))}
        </div>
      ) : filteredMovies.length > 0 ? (
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
        <div className="w-full h-[400px] flex items-center justify-center">
          <p className="text-white text-2xl font-semibold">No results found</p>
        </div>
      )}
    </section>
  );
};
