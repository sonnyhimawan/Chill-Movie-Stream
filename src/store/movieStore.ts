import { create } from "zustand";
import { getAllFilm, getTop10Film, getRewatchFilm,getTrending, getNewRelease } from "../api/movieApi";
import { FilmCards } from "../types/MovieChill.type";

interface FilmCardsChill {

    film: FilmCards[];
    top10Film: FilmCards[];
    rewatchFilm: FilmCards[];
    trendingFilm:FilmCards[];
    newFilmRelease:FilmCards[];
    isLoading: boolean;
    errorMessages: string | null;
    loadFilm: () => Promise<void>;
    loadFilmTop: () => Promise<void>
    loadFilmRewatch: () => Promise<void>
    loadFilmTrending: () => Promise<void>
    loadFilmNew: () => Promise<void>

}


const useFilmChillStore = create<FilmCardsChill>((set) => ({

    film: [],
    top10Film: [],
    rewatchFilm:[],
    trendingFilm:[],
    newFilmRelease:[],
    isLoading: false,
    errorMessages: null,

    loadFilm: async () => {
        set({ isLoading: true });
        try {
            const film = await getAllFilm();
            set({ film, isLoading: false });

        } catch (err: unknown) {

            if (err instanceof Error) {
                set({ errorMessages: err.message, isLoading: false });
            }
        }
    },



     loadFilmTop: async () => {
        set({ isLoading: true });
        try {
            const top10Film = await getTop10Film();
            set({ top10Film, isLoading: false });

        } catch (err: unknown) {

            if (err instanceof Error) {
                set({ errorMessages: err.message, isLoading: false });
            }
        }
    },

    loadFilmRewatch: async () => {
        set({ isLoading: true });
        try {
            const rewatchFilm = await getRewatchFilm();
            set({ rewatchFilm, isLoading: false });

        } catch (err: unknown) {

            if (err instanceof Error) {
                set({ errorMessages: err.message, isLoading: false });
            }
        }
    },

     loadFilmTrending: async () => {
        set({ isLoading: true });
        try {
            const trendingFilm = await getTrending();
            set({ trendingFilm, isLoading: false });

        } catch (err: unknown) {

            if (err instanceof Error) {
                set({ errorMessages: err.message, isLoading: false });
            }
        }
    },


     loadFilmNew: async () => {
        set({ isLoading: true });
        try {
            const newFilmRelease = await getNewRelease();
            set({ newFilmRelease, isLoading: false });

        } catch (err: unknown) {

            if (err instanceof Error) {
                set({ errorMessages: err.message, isLoading: false });
            }
        }
    },

}));

export default useFilmChillStore;