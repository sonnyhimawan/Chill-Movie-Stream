import axios from "axios";
import {FilmCards} from "../types/MovieChill.type"

 const apiUrl = import.meta.env.VITE_API_BASEURL;

export const getFilm = async (): Promise<FilmCards[]> => {

        const result = await axios.get<FilmCards[]>(`${apiUrl}/movies`);
        return result.data;
}

