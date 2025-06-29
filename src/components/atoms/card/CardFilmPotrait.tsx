import { FC } from "react";
import { FilmCards } from "../../../types/MovieChill.type";

const CardFilmPotrait: FC<FilmCards> = ({ id, alt, thumbnailPotrait, isTop10,
  isNewEpisode, }) => {
  return (
    <div data-id={id}>
      <div className="relative swiper-slide rounded-lg">
        <div className="overflow-hidden rounded-lg ">
          <img
            src={thumbnailPotrait}
            alt={alt}
            className="w-full h-full rounded-lg object-cover transition-all duration-300 hover:scale-110"
          />
        </div>
         {isTop10 && (
          <span className="absolute top-0 right-2 sm:right-4 md:right-4 lg:right-6 bg-red-700 p-2 rounded-bl-sm rounded-tr-sm sm:rounded-bl-md sm:rounded-tr-md lg:rounded-bl-lg lg:rounded-tr-lg text-center text-white font-myfont text-sm sm:text-sm md:text-lg lg:text-1xl font-medium">
            Top<br />10
          </span>
        )}

        {isNewEpisode && (
          <span className="absolute top-0 px-4 py-1 sm:px-4 sm:py-2 rounded-full m-3 sm:mt-4 sm:ml-4 md:mt-4 md:ml-4 lg:mt-5 lg:ml-5 bg-primary text-center text-white font-myfont text-sm sm:text-sm md:text-lg lg:text-1xl font-medium">
            New Episode
          </span>
        )}
      </div>
    </div>


  );
};

export default CardFilmPotrait;
