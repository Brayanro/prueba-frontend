import { Toaster } from "sonner";

interface CardProps {
  backdrop: string;
  title: string;
  isFavorite: boolean;
  handleSaveMovieFavorite: () => void;
}

export const Card: React.FC<CardProps> = ({
  backdrop,
  title,
  isFavorite,
  handleSaveMovieFavorite,
}) => {
  return (
    <article className="w-[280px] h-auto rounded-2xl relative cursor-pointer">
      <img
        className="w-full h-auto rounded-2xl object-contain"
        src={backdrop}
        alt={title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white rounded-2xl">
        <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
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
      <Toaster />
    </article>
  );
};
