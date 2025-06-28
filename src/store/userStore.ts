import { create } from "zustand";
import { UserChill, CreateUserChill } from "../types/UserChill.type";
import { getUser, registerUser } from "../api/userApi";
import Avatar from "../../public/assets/img/avatar-default.png"

interface UserChillStore {

    user: UserChill[];
    isLoading: boolean;
    errorMessages: string | null;
    loadUser: () => Promise<void>;
    register: (UserChill: CreateUserChill) => Promise<void>;

}


const useUserChillStore = create<UserChillStore>((set) => ({

    user: [],
    isLoading: false,
    errorMessages: null,

    loadUser: async () => {
        set({ isLoading: true });
        try {
            const user = await getUser();
            set({ user, isLoading: false });

        } catch (err: unknown) {

            if (err instanceof Error) {
                set({ errorMessages: err.message, isLoading: false });
            }
        }
    },

  register: async (user) => {
  set({ isLoading: true });
  try {
    const userDefaultData = {
      ...user,
      membership: "individual",
      avatar: Avatar,
      name: user.username,
    };

    const newUser = await registerUser(userDefaultData);
    set((state) => ({
      user: [...state.user, newUser],
      isLoading: false,
    }));
  } catch (err: unknown) {
    if (err instanceof Error) {
      set({ errorMessages: err.message, isLoading: false });
    }
  }
},

}));

export default useUserChillStore;