import type { NowPlayingMovies } from "../../api/movies/nowPlaying.api";
import { Loader } from "../atoms/Loader";
import { ErrorState } from "../atoms/ErrorState";
import { NowPlayingMovieList } from "../organisms/NowPlayingMovieList";

type Props = {
  title: string;
  nowPlayingMovies?: NowPlayingMovies[] | null;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  onRetry: () => void;
};
export const NowPlayingMoviesTemplate = ({
  title,
  nowPlayingMovies,
  isLoading,
  isFetching,
  isError,
  onRetry,
}: Props) => {
  if (isLoading) return <Loader />;
  if (isError)
    return (
      <ErrorState
        message="Failed to fetch movie. Please try again."
        onRetry={onRetry}
      />
    );
  return (
    <section className="mt-10">
      <h1 className="text-xl font-semibold mb-6 text-left">
        {title} {isFetching && "(Rereshing...)"}
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
        <NowPlayingMovieList nowPlayingMovies={nowPlayingMovies ?? []} />
      </div>
    </section>
  );
};
