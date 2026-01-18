import { CloseCircle } from "iconsax-reactjs";

type Props = {
  youtubeKey: string;
  onClose: () => void;
};

export const TrailerModal = ({ youtubeKey, onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* CLOSE BUTTON */}
      <button onClick={onClose} className="absolute top-4 right-4 text-white">
        <CloseCircle className="h-5 w-5" />
      </button>

      {/* VIDEO */}
      <div className="w-full max-w-[90%] aspect-video rounded-xl overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeKey}?autoplay=1`}
          title="Movie Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
