import { create } from "zustand";
import { UserChill } from "../types/UserChill.type";
import { getUser } from "../api/userApi";
import bcrypt from "bcryptjs";

type AuthState = {
  user: UserChill | null;
  isLoading: boolean;
  errorMessages: string | null;

  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const keyUser = "chill_user";

export const useAuthStore = create<AuthState>((set) => {
  const savedUser = localStorage.getItem(keyUser);
  const initialUser = savedUser ? (JSON.parse(savedUser) as UserChill) : null;

  return {
    user: initialUser,
    isLoading: false,
    errorMessages: null,

    login: async (identifier, password) => {
      set({ isLoading: true, errorMessages: null });

      try {
        const users = await getUser();
        const matchedUser = users.find(
          (u) => u.email === identifier || u.username === identifier
        );

        if (!matchedUser) {
          const errorMsg = "Email/Username tidak ditemukan";
          set({ errorMessages: errorMsg, isLoading: false });
          throw new Error(errorMsg);
        }

        const isPasswordMatch = await bcrypt.compare(password, matchedUser.password);

        if (!isPasswordMatch) {
          const errorMsg = "Password salah";
          set({ errorMessages: errorMsg, isLoading: false });
          throw new Error(errorMsg);
        }

        localStorage.setItem(keyUser, JSON.stringify(matchedUser));
        set({ user: matchedUser, isLoading: false });

      } catch (err: unknown) {
        set({
          errorMessages: "Terjadi kesalahan saat login",
          isLoading: false,
        });
        throw err;
      }
    },

    logout: () => {
      localStorage.removeItem(keyUser);
      set({ user: null });
    },
  };
});

export default useAuthStore;
