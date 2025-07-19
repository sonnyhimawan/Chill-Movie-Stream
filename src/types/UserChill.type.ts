export interface UserChill {
        id: number;
        name?: string;
        username:string;
        email:string ;
        avatar?:string;
        password:string;
        membership?:string;
}

export type CreateUserChill = Omit<UserChill,"id">;