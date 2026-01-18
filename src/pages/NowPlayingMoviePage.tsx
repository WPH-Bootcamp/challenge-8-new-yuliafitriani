import { NowPlayingMoviesTemplate } from "../components/templates/NowPlayingMovieTemplate";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";

const NowPlayingMoviesPage = () => {
  const query = useNowPlayingMovies({ page: 1 });
  return (
    <NowPlayingMoviesTemplate
      title="New Release"
      nowPlayingMovies={query.data}
      isLoading={query.isLoading}
      isFetching={query.isFetching}
      isError={query.isError}
      onRetry={() => query.refetch()}
    />
  );
};

export default NowPlayingMoviesPage;
