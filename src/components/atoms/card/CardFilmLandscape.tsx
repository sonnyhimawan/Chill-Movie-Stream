import { FC } from "react";
import { FilmCards } from "../../../types/MovieChill.type";
import RateIcon from "/public/assets/icon/star.svg?react";

const getBadges = (isTop10: boolean, isNewEpisode: boolean): string => {
  if (isTop10) {
    return "absolute top-0 right-2 sm:right-4 md:right-4 lg:right-6 bg-red-700 p-2 rounded-bl-sm rounded-tr-sm sm:rounded-bl-md sm:rounded-tr-md lg:rounded-bl-lg lg:rounded-tr-lg";
  } else if (isNewEpisode) {
    return "absolute top-0 bg-primary px-4 py-1 sm:px-4 sm:py-2 rounded-full m-3 sm:mt-4 sm:ml-4 md:mt-4 md:ml-4 lg:mt-5 lg:ml-5";
  } else {
    return "hidden";
  }
};

const CardFilmLandscape: FC<FilmCards> = ({
  id,
  title,
  alt,
  thumbnail,
  icon: Icon,
  rating,
  isTop10,
  isNewEpisode,
}) => {
  return (
    <div data-id={id}>
      <div className="relative rounded-lg">
        <div className="overflow-hidden rounded-lg ">
          <img
            src={thumbnail}
            alt={alt}
            className="w-full h-full rounded-lg object-cover transition-all duration-300 hover:scale-110 "
          />
        </div>
        <div className="absolute bottom-0 flex w-full mr-auto p-4 sm:p-4 md:p-4 lg:p-6 rounded-b-lg">
          <h1 className="items-center mr-auto font-myfont text-white text-1xl sm:text-1xl md:text-1xl lg:text-1xl font-bold truncate">
            {title}
          </h1>
          <span className="flex items-center font-myfont gap-2 text-white text-lg font-normal">
            {Icon ? (
              <Icon className="w-4 h-4" />
            ) : (
              <RateIcon className="w-4 h-4" />
            )}
            {rating}/5
          </span>
        </div>

        <span className={getBadges(isTop10, isNewEpisode)}>
          {isTop10 ? "Top 10" : isNewEpisode ? "New Episode" : ""}
        </span>
      </div>
    </div>
  );
};

export default CardFilmLandscape;
