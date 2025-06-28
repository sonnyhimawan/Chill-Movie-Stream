import { FC } from "react";
import { FilmCards } from "../../../types/MovieChill.type";
import BtnPrimary from "../button/BtnPrimaryWithIcon";
import BtnSecondaryWithicon from "../button/BtnSecondaryWithIcon";
import InfoIcon from "/public/assets/icon/information-outline.svg?react";
import VolumeOff from "/public/assets/icon/volume-off.svg?react";

const CardFilmHero: FC<FilmCards> = ({ id, title, banner,description }) => {
  return (
    <div className="col-span-full">
      <div data-id={id} className="w-full relative">
        <source
          src={banner}
          className="w-full h-80 sm:h-full lg:h-full object-cover"
        />
        <div className="w-full absolute inset-0 h-full z-1 flex justify-end flex-col px-8 py-8 sm:py-10 lg:py-16 sm:px-10 lg:px-16">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-12 mb-0.5 sm:mb-3 md:mb-3 lg:mb-6 text-white font-myFont">
            {title}
          </h1>
          <p className="w-full sm:w-8/12 md:w-6/12 lg:w-5/12 text-sm sm:text-sm lg:text-p font-normal font-myFont text-white line-clamp-2 sm:line-clamp-3 lg:line-clamp-3">
            {description}
          </p>
          <div className="w-full flex">
            <div className="flex mt-5 sm:mt-5 lg:mt-8 gap-2 sm:gap-2 lg:gap-4 mr-auto">
              <BtnPrimary
                label="Mulai"
                type="button"
                className="bg-primary px-3 sm:px-3 lg:px-6 py-1.5 sm:py-1.5 lg:py-3 hover:bg-primary/80 hover:cursor-pointer text-sm-12 sm:text-sm-12 lg:text-p font-medium font-myFont text-white rounded-full"
              ></BtnPrimary>

              <BtnSecondaryWithicon
                label="Selengkapnya"
                type="button"
                className="bg-secondary px-3 sm:px-3 lg:px-6 py-1.5 sm:py-1.5 lg:py-3 hover:bg-secondary/80 hover:cursor-pointer text-sm-12 sm:text-sm-12 lg:text-p font-medium font-myFont text-white rounded-full flex items-center gap-2"
                icon={InfoIcon}
              ></BtnSecondaryWithicon>

              <BtnPrimary
                label="18+"
                type="button"
                className="px-1 sm:px-1 lg:px-3 py-1.5 sm:py-1.5 lg:py-3 text-white font-myFont text-sm-12 sm:text-sm-12 lg:text-p flex items-center justify-center border-1 rounded-full hover:cursor-pointer"
              />
            </div>
            <div className="flex items-end">
              <BtnPrimary
                type="button"
                className="px-2 sm:px-2 lg:px-3.5 py-2 sm:py-2 lg:py-3.5 text-sm flex items-center justify-center font-myFont text-white border border-white rounded-full mt-3 mr-2 hover:cursor-pointer"
                icon={VolumeOff}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFilmHero;
