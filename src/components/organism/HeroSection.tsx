import CardFilmHero from "../atoms/card/CardFilmHero";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay} from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import useFilmChillStore from "../../store/movieStore";



const HeroSection = () => {

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const top10film = useFilmChillStore((state) => state.top10Film);
    
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
            <div className="overflow-x-hidden relative">
            <div className="w-full mx-auto pt-20 ">
                
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="group relative">
                
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView={1}
                        loop={true}
                        autoplay={!isMobile ? { delay: 3000 } : false}
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
                        {top10film.map((HeroItems) => (
                            <SwiperSlide key={HeroItems.id}>
                                <CardFilmHero
                                    {...HeroItems}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            </div>
        </section>



    )



}

export default HeroSection;