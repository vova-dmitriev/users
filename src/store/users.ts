import { create } from "zustand";

import UsersService from "@/api/UsersService";
import { IUser, IUsersRequestParams } from "@/interfaces";
import { RequestStatus, StateStatuses } from "@/interfaces/common";
import axios from "axios";

export interface IUsersAction {
  getUsers: (params?: IUsersRequestParams) => void;
}

export type UserStateStatuses = StateStatuses<IUsersAction>;

const initStatuses: UserStateStatuses = {
  getUsers: RequestStatus.none,
};

export interface IUsersState {
  isLoading: boolean;
  error: string | null;
  users: IUser[];
  statuses: UserStateStatuses;
}

const initialState: IUsersState = {
  isLoading: false,
  error: null,
  users: [],
  statuses: initStatuses,
};

export const useUsersStore = create<IUsersState & IUsersAction>()(
  (set, get) => ({
    ...initialState,
    getUsers: async (params) => {
      try {
        set({
          isLoading: true,
          error: null,
          statuses: { ...get().statuses, getUsers: RequestStatus.loading },
        });

        const response = await UsersService.loadUsers(params);

        set({
          users: response.data,
          isLoading: false,
          statuses: { ...get().statuses, getUsers: RequestStatus.success },
        });
      } catch (e) {
        if (axios.isAxiosError(e)) {
          set({ error: e.response?.data?.message });
        } else {
          const errStr = typeof e === "string" ? e : "Неизвестная ошибка";
          set({ error: errStr, isLoading: false });
        }
        set({ statuses: { ...get().statuses, getUsers: RequestStatus.fail } });
      }
    },
  })
);
