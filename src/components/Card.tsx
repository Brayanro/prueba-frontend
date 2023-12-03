interface CardProps {
  poster: string | null;
  title: string;
  isFavorite: boolean;
  handleSaveMovieFavorite: () => void;
  handleSeeMoreDetails: () => void;
}

export const Card: React.FC<CardProps> = ({
  poster,
  title,
  isFavorite,
  handleSaveMovieFavorite,
  handleSeeMoreDetails,
}) => {
  return (
    <article className="w-[271px] h-auto rounded-2xl relative cursor-pointer">
      {poster ? (
        <img
          className="w-full h-auto rounded-2xl object-contain"
          src={poster}
          alt={title}
          onClick={handleSeeMoreDetails}
        />
      ) : (
        <div className="w-[271px] h-[406px] bg-gray-500 rounded-2xl flex items-center justify-center">
          <p className="text-white text-sm font-medium">Image Not found</p>
        </div>
      )}
      <div>
        <p className="text-base font-bold absolute text-white bottom-7 mx-4">
          {title}
        </p>
        <button
          className="absolute top-4 left-4"
          onClick={handleSaveMovieFavorite}
        >
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            xmlns="http://www.w3.org/2000/svg"
            fill={isFavorite ? "#00C2FF" : "none"}
          >
            <path
              d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
              stroke="#00C2FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </article>
  );
};
