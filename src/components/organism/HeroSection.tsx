import CardFilmHero from "../atoms/card/CardFilmHero";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import useFilmChillStore from "../../store/movieStore";

const HeroSection = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );

  const top10film = useFilmChillStore((state) => state.top10Film);

  return (
    <section>
      <div className="overflow-x-hidden relative">
        <div className="w-full mx-auto pt-20 ">
          <div className="group relative">
            <Swiper
              modules={[Navigation, Pagination]}
              loop
              slidesPerView={1}
              pagination={{
                clickable: true,
                enabled: false,
                
              }}
              breakpoints={{
                1020: {
                  pagination: {
                    clickable: true,
                    enabled: true,
                  },
                },
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
              className="swipper-wrapper relative flex gap-4 w-full sm:overflow-x-hidden lg:overflow-x-hidden"
            >
              
              {Array.isArray(top10film) && top10film.length > 0 ? (
                top10film.map((heroItems) => (
                  <SwiperSlide key={heroItems.id}>
                    <CardFilmHero
                      {...heroItems}
                      onVideoEnd={() => {
                        swiperInstance?.slideNext();
                      }}
                    />
                  </SwiperSlide>
                ))
              ) : (
                <p className="text-center text-white py-6 font-myfont">Loading.</p>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
