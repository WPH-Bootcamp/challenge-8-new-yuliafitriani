import { apiClient } from "./axios";

export type FavoriteMovie = {
  id: number;
  title: string;
  rating: number;
  posterPath: string;
  overview: string;
};

type TMDBFavoriteMovie = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  overview: string;
};

type GetFavoriteMoviesResponse = {
  results: TMDBFavoriteMovie[];
};

export const getFavoriteMovies = async (
  accountId: number
): Promise<FavoriteMovie[]> => {
  const res = await apiClient.get<GetFavoriteMoviesResponse>(
    `/account/${accountId}/favorite/movies`
  );

  return res.data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    rating: movie.vote_average,
    posterPath: movie.poster_path,
    overview: movie.overview,
  }));
};
