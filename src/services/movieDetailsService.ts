import { MovieDetail } from "../types/movies";

const key: string = import.meta.env.VITE_TMDB_API_KEY;

export const movieDetailsService = async (id: string): Promise<MovieDetail> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
  );
  const data = await response.json();
  return data;
};
