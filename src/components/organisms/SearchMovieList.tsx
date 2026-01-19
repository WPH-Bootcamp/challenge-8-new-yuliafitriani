import type { FavoriteMovie } from "../../api/favoriteMovies";
import { FavoriteMovieCard } from "../molecules/FavoriteMovieCard";

type Props = {
  movies: FavoriteMovie[];
};

export const SearcMovieList = ({ movies }: Props) => {
  return (
    <div className="flex w-full flex-col items-center gap-6">
      {movies.map((movie) => (
        <FavoriteMovieCard
          key={movie.id}
          movie={movie}
          onPlay={() =>
            window.open(
              `https://www.themoviedb.org/movie/${movie.id}`,
              "_blank",
            )
          }
        />
      ))}
    </div>
  );
};
