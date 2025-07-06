import { FC } from "react";
import { FilmCards } from "../../../types/MovieChill.type";
import BtnPrimary from "../button/BtnPrimaryWithIcon";
import Checked from "../../../../public/assets/icon/check.svg?react";
import Play from "../../../../public/assets/icon/play-circle.svg?react";

const CardFilmPotrait: FC<FilmCards> = ({ id, alt, thumbnailPotrait, isTop10, thumbnailLandscape,
  isNewEpisode, }) => {

  const HandlePlay = () => {

  }

  const HandleAdd = () => {

  }

  return (
    <div data-id={id} className="group relative hover:cursor-pointer">
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

      <div className="absolute z-10 left-1/2 -translate-x-1/2 top-[-20px] w-[280px] h-[360px] lg:left-1/2 lg:-translate-x-1/2 lg:top-[-28px] lg:w-[300px] lg:h-[370px] xl:left-1/2 xl:-translate-x-1/2 xl:top-[-30px] xl:w-[300px] xl:h-[380px] 2xl:left-1/2 2xl:-translate-x-1/2 2xl:top-[-20px] 2xl:w-[440px] 2xl:h-[548px] group-hover:opacity-100 opacity-0 pointer-events-none transition-all duration-300 bg-background rounded-lg drop-shadow-xl/70 drop-shadow-gray-500/25 overflow-hidden hover:cursor-pointer">
        <img
          src={thumbnailLandscape}
          className="w-full object-cover"
        />
        <div className="p-10">
          <div className="flex gap-4">
             <BtnPrimary
              type="button"
              className="font-myFont rounded-full"
              icon={Play}
              onClick={HandlePlay}
            />
            <BtnPrimary
              type="button"
              className="py-1  px-4.5 text-sm flex items-center justify-center font-myFont bg-red-500 text-white border border-white/15 rounded-full"
              icon={Checked}
              onClick={HandleAdd}
            />
          </div>
        </div>
      </div>

    </div>


  );
};

export default CardFilmPotrait;
