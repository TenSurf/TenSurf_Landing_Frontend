import { create } from "zustand";

export interface AccountState {
  is_waitlist: boolean;
  update_waitlist: any;
  user_data: any;
}

export const useAccountStore = create<AccountState>((set, get) => ({
  is_waitlist: false,
  user_data: {
    email: "",
    full_name: "",
    plan: null,
  },

  update_waitlist: (value: boolean) =>
    set(() => {
      return { is_waitlist: value };
    }),

  update_user_data: (data: any) =>
    set(() => {
      return { user_data: data };
    }),
}));
