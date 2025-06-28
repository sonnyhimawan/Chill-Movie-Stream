import axios from "axios";
import { UserChill,CreateUserChill } from "../types/UserChill.type";

 const apiUrl = import.meta.env.VITE_API_BASEURL;

export const getUser = async (): Promise<UserChill[]> => {

        const result = await axios.get<UserChill[]>(`${apiUrl}/user`);
        return result.data;
}

export const registerUser = async (newUserChill:CreateUserChill): Promise<UserChill> => {
    const result = await axios.post(`${apiUrl}/user`,newUserChill);
    return result.data;
    
}