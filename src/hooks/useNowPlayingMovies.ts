import { useQuery } from "@tanstack/react-query";
import {
  nowPlayingMoviesQueryKey,
  nowPlayingMoviesListQueryFn,
} from "../queries/movies/nowPlaying.query";

export type UseNowPlayingMoviesOptions = {
  page?: number;
};

export const useNowPlayingMovies = (
  options: UseNowPlayingMoviesOptions = {}
) => {
  const { page } = options;

  return useQuery({
    queryKey: nowPlayingMoviesQueryKey.list({ page }),
    queryFn: nowPlayingMoviesListQueryFn,
  });
};
