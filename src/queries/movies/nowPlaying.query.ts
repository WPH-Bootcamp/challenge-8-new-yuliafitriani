import type { QueryFunctionContext } from "@tanstack/react-query";
import { getNowPlayingMovies } from "../../api/movies/nowPlaying.api";

export const nowPlayingMoviesQueryKey = {
  all: ["nowPlayingMovies"] as const,
  list: (params: { page?: number }) =>
    [...nowPlayingMoviesQueryKey.all, "list", params] as const,
};

type NowPlayingMoviesListKey = ReturnType<typeof nowPlayingMoviesQueryKey.list>;

export const nowPlayingMoviesListQueryFn = async ({
  queryKey,
}: QueryFunctionContext<NowPlayingMoviesListKey>) => {
  const [, , params] = queryKey;
  return getNowPlayingMovies({ page: params?.page });
};
