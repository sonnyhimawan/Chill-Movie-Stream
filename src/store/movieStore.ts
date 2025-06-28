import { create } from "zustand";
import { getFilm } from "../api/movieApi";
import { FilmCards } from "../types/MovieChill.type";

interface FilmCardsChill {

    film: FilmCards[];
    isLoading: boolean;
    errorMessages: string | null;
    loadFilm: () => Promise<void>;

}


const useFilmChillStore = create<FilmCardsChill>((set) => ({

    film: [],
    isLoading: false,
    errorMessages: null,

    loadFilm: async () => {
        set({ isLoading: true });
        try {
            const film = await getFilm();
                console.log("Fetched film:", film);
            set({ film, isLoading: false });

        } catch (err: unknown) {

            if (err instanceof Error) {
                set({ errorMessages: err.message, isLoading: false });
            }
        }
    },

}));

export default useFilmChillStore;