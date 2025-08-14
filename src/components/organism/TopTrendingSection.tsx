import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import useFilmChillStore from "../../store/movieStore";
import PrevIcon from "/public/assets/icon/arrow-left.svg?react";
import NextIcon from "/public/assets/icon/arrow-right.svg?react";
import CardFilmPotrait from "../atoms/card/CardFilmPotrait";

const TopTrendingSection = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(false);
  const top10Film = useFilmChillStore((state) => state.top10Film);

  useEffect(() => {
    const handleDeviceSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleDeviceSize();
    window.addEventListener("resize", handleDeviceSize);
    return () => window.removeEventListener("resize", handleDeviceSize);
  }, []);

  const handleMouseEnter = () => {
    if (swiperInstance?.autoplay) {
      swiperInstance.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperInstance?.autoplay) {
      swiperInstance.autoplay.start();
    }
  };

  return (
    <section>
      <div className="px-8 py-8 sm:py-10 lg:py-16 sm:px-10 lg:px-16 overflow-x-hidden relative bg-background">
        <h1 className="text-1xl sm:text-3xl md:text-3xl lg:text-4xl font-bold font-myFont text-white">
          Film Trending
        </h1>
        <button
          ref={prevRef}
          className="absolute items-center top-4/8 sm:translate-y-2 md:translate-y-3 lg:translate-y-4 sm:left-5 sm:z-10 md:left-5 lg:left-10 text-center sm:text-2xl sm:text-white sm:bg-gray-800 sm:hover:bg-secondary sm:cursor-pointer sm:border-1 sm:border-gray-600 sm:rounded-full sm:px-2 sm:py-2 md:px-2 md:py-2 lg:px-3 lg:py-3"
          aria-label="Previous"
        >
          <PrevIcon className="w-7 h-7 text-white hidden sm:block md:block lg:block xl:block" />
        </button>

        <button
          ref={nextRef}
          className="absolute items-center top-4/8 sm:translate-y-2 md:translate-y-3 lg:translate-y-4 sm:right-5 md:right-5 lg:right-10 text-center sm:z-10 sm:text-2xl sm:text-white sm:bg-gray-800 sm:hover:bg-secondary sm:cursor-pointer sm:border-1 sm:border-gray-600 sm:rounded-full sm:px-2 sm:py-2 md:px-2 md:py-2 lg:px-3 lg:py-3"
          aria-label="Next"
        >
          <NextIcon className="w-7 h-7 text-white hidden sm:block md:block lg:block xl:block" />
        </button>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="py-4 sm:py-6 md:py-8 lg:py-10 relative overflow-x-hidden overflow-y-hidden"
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            loop={true}
            autoplay={!isMobile ? { delay: 3000 } : false}
            breakpoints={{
              375: { slidesPerView: 2.2 },
              640: { slidesPerView: 2.4 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            onBeforeInit={(swiper) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            className="relative !overflow-visible rounded-lg flex gap-4 w-full sm:overflow-x-hidden lg:overflow-x-hidden"
          >
            {Array.isArray(top10Film) && top10Film.length > 0 ? (
              top10Film.map((top10Item) => (
                <SwiperSlide
                  key={top10Item.id}
                  className="!overflow-visible relative z-0 hover:z-[999]"
                >
                  <CardFilmPotrait {...top10Item} />
                </SwiperSlide>
              ))
            ) : (
               <p className="text-center text-white py-6 font-myfont">Loading.</p>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TopTrendingSection;
