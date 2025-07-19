import axios from "axios";
import bcrypt from "bcryptjs";
import { UserChill,CreateUserChill } from "../types/UserChill.type";

 const apiUrl = import.meta.env.VITE_API_BASEURL;

export const getUser = async (): Promise<UserChill[]> => {
        const result = await axios.get<UserChill[]>(`${apiUrl}/user`);
        return result.data;
}

export const registerUser = async (newUserChill:CreateUserChill): Promise<UserChill> => {
    const hashPassword = await bcrypt.hash(newUserChill.password, 10);
    const result = await axios.post(`${apiUrl}/user`,{...newUserChill,password:hashPassword,});
    return result.data;
    
}