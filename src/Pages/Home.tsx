import { useEffect } from "react";
import useFilmChillStore from "../store/movieStore";
import HeroSection from "../components/organism/HeroSection";
import RewatchSection from "../components/organism/RewatchSection";
import HomeLayout from "../Layout/HomeLayout";


const HomePage = () => {

      useEffect(() => {
    useFilmChillStore.getState().loadFilm(); // hanya dijalankan sekali saat mount
  }, []);
    return (

        <HomeLayout>
            <HeroSection/>
            <RewatchSection/>
        </HomeLayout>
    );
};

export default HomePage;
