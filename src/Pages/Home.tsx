import { useEffect } from "react";
import useFilmChillStore from "../store/movieStore";
import HeroSection from "../components/organism/HeroSection";
import RewatchSection from "../components/organism/RewatchSection";
import HomeLayout from "../Layout/HomeLayout";
import TopRatingSection from "../components/organism/TopRatingSection";
import TopTrendingSection from "../components/organism/TopTrendingSection";
import NewRilisSection from "../components/organism/NewRilisSection";

const HomePage = () => {
  useEffect(() => {
    useFilmChillStore.getState().loadFilm();
    useFilmChillStore.getState().loadFilmTop();
    useFilmChillStore.getState().loadFilmRewatch();
    useFilmChillStore.getState().loadFilmTrending();
    useFilmChillStore.getState().loadFilmNew();
  }, []);

  return (
    <HomeLayout>
      <HeroSection />
      <RewatchSection />
      <TopRatingSection/>
      <TopTrendingSection/>
      <NewRilisSection/>
    </HomeLayout>
  );
};

export default HomePage;
