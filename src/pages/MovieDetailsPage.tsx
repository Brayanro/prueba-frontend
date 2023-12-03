import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { movieDetailsService } from "../services/movieDetailsService";
import { MovieDetail } from "../types/movies";
import { formatDateToUS } from "../utils/functions";

export const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetail>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          setLoading(true);
          const response = await movieDetailsService(id);
          setMovieDetails(response);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <main className="background w-full flex flex-col gap-20">
      <header className="relative">
        <div className="w-full h-[650px] text-white mb-6 absolute top-0 left-0">
          <div className="w-full h-full">
            <div className="absolute w-full h-[650px] bg-gradient-to-r from-black" />
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}`}
              alt={movieDetails?.title}
            />
            <div className="absolute w-full top-[20%] p-4 md:p-8 flex flex-col gap-5">
              {loading ? (
                <div className="h-5 w-[250px] bg-gray-200 rounded-full 2xl:ml-8" />
              ) : (
                <h1 className="text-3xl md:text-6xl font-bold 2xl:ml-8">
                  {movieDetails?.title}
                </h1>
              )}
              <p className="text-gray-300 text-lg lg:text-2xl 2xl:ml-8 flex flex-row items-center gap-2">
                <span className="font-bold">Release: </span>
                {loading ? (
                  <div className="h-3 w-[170px] bg-gray-200 rounded-full" />
                ) : (
                  <span>
                    {movieDetails?.release_date
                      ? formatDateToUS(movieDetails?.release_date)
                      : ""}
                  </span>
                )}
              </p>
              <p className="text-gray-300 text-lg lg:text-2xl 2xl:ml-8 flex flex-row items-center gap-2">
                <span className="font-bold"> Vote: </span>
                {loading ? (
                  <div className="h-3 w-[170px] bg-gray-200 rounded-full" />
                ) : (
                  <span>{movieDetails?.vote_average}</span>
                )}
              </p>
            </div>
          </div>
        </div>
        <Navbar isHome={false} />
      </header>
      <section className="w-full h-full mt-[520px] text-white flex flex-col gap-12 px-16">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">Overview</h3>
          {loading ? (
            <div className="h-3 w-full bg-gray-200 rounded-full mt-2" />
          ) : (
            <p className="text-base">{movieDetails?.overview}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">Production Companies</h3>
          {loading ? (
            <div className="h-3 w-[130px] bg-gray-200 rounded-full mt-2" />
          ) : (
            movieDetails?.production_companies.map(
              ({ id, name, logo_path }) => (
                <div className="flex flex-row gap-2 items-center">
                  <p className="text-base" key={id}>
                    {name}
                  </p>
                  {logo_path !== null && (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${logo_path}`}
                      alt={name}
                      className="object-contain w-16 h-16"
                    />
                  )}
                </div>
              )
            )
          )}
        </div>
        <a
          href={movieDetails?.homepage}
          target="_blank"
          rel="noreferrer noopener"
          className="w-[200px] md:w-[300px] flex items-center justify-center cursor-pointer p-4 bg-[#31A5E0] hover:bg-[#3c8bb3] text-white rounded-lg text-base mb-12 md:text-xl font-bold"
        >
          More Information
        </a>
      </section>
    </main>
  );
};
