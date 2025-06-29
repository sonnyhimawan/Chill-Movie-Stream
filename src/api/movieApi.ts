import axios from "axios";
import {FilmCards} from "../types/MovieChill.type"

 const apiUrl = import.meta.env.VITE_API_BASEURL;

export const getAllFilm = async (): Promise<FilmCards[]> => {

        const result = await axios.get<FilmCards[]>(`${apiUrl}/movies`);
        return result.data;
}

export const getTop10Film = async (): Promise<FilmCards[]> => {

        const result = await axios.get<FilmCards[]>(`${apiUrl}/movies/?isTop10=true&limit=10`);
        return result.data;
}

export const getTrending = async (): Promise<FilmCards[]> => {

        const result = await axios.get<FilmCards[]>(`${apiUrl}/movies/?isTrending=true`);
        return result.data;
}

export const getRewatchFilm = async (): Promise<FilmCards[]> => {

        const result = await axios.get<FilmCards[]>(`${apiUrl}/movies/?isRewatch=true`);
        return result.data;
}

export const getNewRelease = async (): Promise<FilmCards[]> => {

        const result = await axios.get<FilmCards[]>(`${apiUrl}/movies/?isNewRelease=true`);
        return result.data;
}

