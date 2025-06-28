export interface UserChill {
        id: number;
        name?: string | null;
        username:string;
        email:string ;
        avatar?:string | null;
        password:string;
        membership?:string;
}

export type CreateUserChill = Omit<UserChill,"id">;