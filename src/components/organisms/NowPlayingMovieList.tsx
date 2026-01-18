import type { NowPlayingMovies } from "../../api/movies/nowPlaying.api";
import { NowPlayingMovieCard } from "../molecules/NowPlayingMovieCard";
// import { showTopTenSignal } from "../../signals/ui.signal";

type Props = {
  nowPlayingMovies: NowPlayingMovies[];
};

export const NowPlayingMovieList = ({ nowPlayingMovies }: Props) => {
  // const visible = showTopTenSignal.value
  //   ? popularMovies.slice(1)
  //   : popularMovies;
  // const visible = popularMovies;
  return (
    <>
      {nowPlayingMovies.map((movie) => (
        <div key={movie.id} className="min-w-45 shrink-0">
          <NowPlayingMovieCard key={movie.id} nowPlayingMovies={movie} />
        </div>
      ))}
    </>
  );
};
