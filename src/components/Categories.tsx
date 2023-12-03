import { useContext } from "react";
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

  const filteredMovies = movies.filter(({ title }) => {
    return title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const skeletonElements = new Array(20).fill(null);

  return (
    <section className="mx-6 md:mx-16 pb-14 mt-[520px] lg:mt-[480px] 2xl:h-screen">
      <h2 className="text-white text-2xl font-bold">
        {categoryName} ({movies.length})
      </h2>
      <SearchInput searchTerm={searchTerm} handleSearch={setSearchTerm} />
      {loading ? (
        <div className="grid gap-6 mt-6 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {skeletonElements.map((_, index) => (
            <article
              key={index}
              className="w-[280px] h-[158px] rounded-2xl animate-pulse bg-gray-200"
            />
          ))}
        </div>
      ) : filteredMovies.length > 0 ? (
        <div className="grid gap-6 mt-6 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {filteredMovies.map((movie) => (
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
