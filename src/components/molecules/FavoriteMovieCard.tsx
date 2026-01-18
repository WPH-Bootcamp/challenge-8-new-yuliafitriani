import { PlayCircle } from "iconsax-reactjs";
import type { FavoriteMovie } from "../../api/favoriteMovies";
import { FavoriteButton } from "../molecules/FavoriteButton";

type Props = {
  movie: FavoriteMovie;
  onPlay?: () => void;
  onToggleFavorite?: () => void;
  isFavorite?: boolean;
};

export const FavoriteMovieCard = ({ movie, onPlay }: Props) => {
  return (
    <div
      className="
        flex flex-col gap-
        lg:flex-row lg:items-start lg:justify-between
        lg:w-[1280px] lg:gap-[63px] lg:px-4
      "
    >
      {/* Left Content */}
      <div
        className="
          flex gap-4
          lg:gap-6 lg:w-[978px]
        "
      >
        {/* Image */}
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.posterPath}`}
          alt={movie.title}
          className="
            h-[156px] w-[104px] rounded-lg object-cover
            lg:h-[270px] lg:w-[182px] lg:rounded-xl
          "
        />

        {/* Text Content */}
        <div
          className="
            flex flex-col gap-2
            lg:flex-1 lg:gap-2
            text-left
          "
        >
          {/* Title */}
          <h3
            className="
              line-clamp-2 text-base font-bold leading-[30px] text-white
              lg:text-[24px] lg:leading-[36px]
            "
          >
            {movie.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 text-neutral-50">
            ⭐
            <span
              className="
                text-sm
                lg:text-lg lg:leading-[32px]
              "
            >
              {movie.rating.toFixed(1)}/10
            </span>
          </div>

          {/* Overview */}
          <p
            className="
              line-clamp-2 text-sm leading-[28px] text-[#A4A7AE]
              lg:text-base lg:leading-[30px]
            "
          >
            {movie.overview}
          </p>

          {/* Actions (LG inline) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onPlay}
              className="
                flex h-[52px] w-[200px]
                items-center justify-center gap-2
                rounded-full bg-primary-300
                text-base font-semibold text-white
              "
            >
              Watch Trailer
              <PlayCircle size={24} variant="Bold" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div
        className="
          flex items-center gap-4
          lg:flex-col lg:gap-0
        "
      >
        {/* Mobile Watch */}
        <button
          onClick={onPlay}
          className="
            flex h-11 flex-1 items-center justify-center gap-2
            rounded-full bg-primary-300
            text-sm font-semibold text-white
            mt-4
            lg:hidden
          "
        >
          Watch Trailer
          <PlayCircle size={18} variant="Bold" />
        </button>

        {/* Favorite */}
        <FavoriteButton movieId={movie.id} />
      </div>
    </div>
  );
};
