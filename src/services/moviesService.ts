import { Movies } from '../types/movies';

export const movieService = async ({ fetchUrl }: { fetchUrl: string }): Promise<Movies[]> => {
  const response = await fetch(fetchUrl);
  const data = await response.json();
  return data.results;
};
