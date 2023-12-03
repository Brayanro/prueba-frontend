import { useContext, useEffect, useState } from "react";
import { Categories } from "./components/Categories";
import { Favorites } from "./components/Favorites";
import { Navbar } from "./components/Navbar";
import { AppContext, AppContextType } from "./context/AppContext";
import { movieService } from "./services/moviesService";
import { Movies } from "./types/movies";
import { formatDateToUS, truncateString } from "./utils/functions";
import { requests } from "./utils/request";

export const App = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [loading, setLoading] = useState(false);
  const { selectedTab } = useContext(AppContext) as AppContextType;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await movieService({
          fetchUrl: requests.requestPopular,
        });
        setMovies(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const movie = movies[0];

  return (
    <main className="background w-full">
      <header className="relative">
        <div className="w-full h-[550px] text-white absolute top-0 left-0">
          <div className="w-full h-full">
            <div className="absolute w-full h-[550px] bg-gradient-to-r from-black" />
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt={movie?.title}
            />
            <div className="absolute w-full top-[20%] p-4 md:p-8 flex flex-col gap-5">
              <h1 className="text-3xl md:text-6xl font-bold 2xl:ml-8">
                {movie?.title}
              </h1>
              <p className="text-gray-300 text-lg lg:text-2xl 2xl:ml-8 flex flex-row items-center gap-2">
                <span className="font-bold">Release: </span>
                {loading ? (
                  <div className="h-3 w-[170px] bg-gray-200 rounded-full" />
                ) : (
                  <span>
                    {movie?.release_date
                      ? formatDateToUS(movie?.release_date)
                      : ""}
                  </span>
                )}
              </p>
              {loading ? (
                <div className="h-3 w-[250px] bg-gray-200 rounded-full 2xl:ml-8" />
              ) : (
                <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-lg lg:text-2xl 2xl:ml-8">
                  {truncateString(movie?.overview, 150)}
                </p>
              )}
            </div>
          </div>
        </div>
        <Navbar isHome />
      </header>
      {selectedTab === "Popular" && (
        <Categories categoryName="Popular" fetchUrl={requests.requestPopular} />
      )}
      {selectedTab === "Top" && (
        <Categories
          categoryName="Top Rated"
          fetchUrl={requests.requestTopRated}
        />
      )}
      {selectedTab === "Upcoming" && (
        <Categories
          categoryName="Upcoming"
          fetchUrl={requests.requestUpcoming}
        />
      )}
      {selectedTab === "Favorites" && <Favorites />}
    </main>
  );
};
